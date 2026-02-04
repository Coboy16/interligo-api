import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Card as CardInterface } from '../types';
import { User } from './User.model';
import { Account } from './Account.model';

interface CardCreationAttributes extends Optional<CardInterface, 'id'> {}

export class Card extends Model<CardInterface, CardCreationAttributes> implements CardInterface {
  public id!: string;
  public user_id!: string;
  public account_id!: string;
  public card_number_masked!: string;
  public card_holder_name!: string;
  public type!: 'DEBIT' | 'CREDIT';
  public brand!: 'VISA' | 'MASTERCARD';
  public status!: 'ACTIVE' | 'FROZEN' | 'BLOCKED';
  public expiry_date!: string;
  public cvv_masked!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Card.init(
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
    account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Account,
        key: 'id',
      },
    },
    card_number_masked: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_holder_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('DEBIT', 'CREDIT'),
      allowNull: false,
    },
    brand: {
      type: DataTypes.ENUM('VISA', 'MASTERCARD'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'FROZEN', 'BLOCKED'),
      allowNull: false,
    },
    expiry_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv_masked: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cards',
    timestamps: true,
  }
);

Card.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Card.belongsTo(Account, { foreignKey: 'account_id', as: 'account' });
User.hasMany(Card, { foreignKey: 'user_id', as: 'cards' });
Account.hasMany(Card, { foreignKey: 'account_id', as: 'cards' });
