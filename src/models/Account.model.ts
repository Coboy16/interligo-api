import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Account as AccountInterface } from '../types';
import { User } from './User.model';

interface AccountCreationAttributes extends Optional<AccountInterface, 'id'> {}

export class Account extends Model<AccountInterface, AccountCreationAttributes> implements AccountInterface {
  public id!: string;
  public user_id!: string;
  public alias!: string;
  public account_number!: string;
  public currency!: 'USD' | 'PEN' | 'EUR';
  public available_balance!: number;
  public ledger_balance!: number;
  public type!: 'SAVINGS' | 'CHECKING';
  public status!: 'ACTIVE' | 'INACTIVE';

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Account.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    currency: {
      type: DataTypes.ENUM('USD', 'PEN', 'EUR'),
      allowNull: false,
    },
    available_balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ledger_balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('SAVINGS', 'CHECKING'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'accounts',
    timestamps: true,
  }
);

Account.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Account, { foreignKey: 'user_id', as: 'accounts' });
