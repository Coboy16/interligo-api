import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Transaction as TransactionInterface } from '../types';
import { Account } from './Account.model';

interface TransactionCreationAttributes extends Optional<TransactionInterface, 'id'> {}

export class Transaction extends Model<TransactionInterface, TransactionCreationAttributes> implements TransactionInterface {
  public id!: string;
  public account_id!: string;
  public date!: string;
  public amount!: number;
  public description!: string;
  public type!: 'CREDIT' | 'DEBIT';
  public category!: string;
  public reference_number!: string;
  public status!: 'COMPLETED' | 'PENDING' | 'FAILED';

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transaction.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Account,
        key: 'id',
      },
    },
    date: {
      type: DataTypes.STRING, // Storing as string as per mock data
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('CREDIT', 'DEBIT'),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('COMPLETED', 'PENDING', 'FAILED'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'transactions',
    timestamps: true,
  }
);

Transaction.belongsTo(Account, { foreignKey: 'account_id', as: 'account' });
Account.hasMany(Transaction, { foreignKey: 'account_id', as: 'transactions' });
