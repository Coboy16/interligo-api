import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Beneficiary as BeneficiaryInterface } from '../types';
import { User } from './User.model';

interface BeneficiaryCreationAttributes extends Optional<BeneficiaryInterface, 'id'> {}

export class Beneficiary extends Model<BeneficiaryInterface, BeneficiaryCreationAttributes> implements BeneficiaryInterface {
  public id!: string;
  public user_id!: string;
  public name!: string;
  public account_number!: string;
  public bank_name!: string;
  public bank_code!: string;
  public alias!: string;
  public email?: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Beneficiary.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bank_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true, // Optional
    },
  },
  {
    sequelize,
    tableName: 'beneficiaries',
    timestamps: true,
  }
);

Beneficiary.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Beneficiary, { foreignKey: 'user_id', as: 'beneficiaries' });
