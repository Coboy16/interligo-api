import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Transfer as TransferInterface } from '../types';
import { User } from './User.model';
import { Account } from './Account.model';
import { Beneficiary } from './Beneficiary.model';

interface TransferCreationAttributes extends Optional<TransferInterface, 'id' | 'confirmed_at'> {}

export class Transfer extends Model<TransferInterface, TransferCreationAttributes> implements TransferInterface {
  public id!: string;
  public user_id!: string;
  public from_account_id!: string;
  public beneficiary_id!: string;
  public amount!: number;
  public currency!: string;
  public description!: string;
  public status!: 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  public created_at!: string;
  public confirmed_at?: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transfer.init(
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
    from_account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Account,
        key: 'id',
      },
    },
    beneficiary_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Beneficiary,
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'COMPLETED', 'FAILED', 'CANCELLED'),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING, // Storing as string as per mock data
      allowNull: false,
    },
    confirmed_at: {
      type: DataTypes.STRING, // Storing as string as per mock data, Optional
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'transfers',
    timestamps: true,
  }
);

Transfer.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Transfer.belongsTo(Account, { foreignKey: 'from_account_id', as: 'fromAccount' });
Transfer.belongsTo(Beneficiary, { foreignKey: 'beneficiary_id', as: 'beneficiary' });
User.hasMany(Transfer, { foreignKey: 'user_id', as: 'transfers' });
Account.hasMany(Transfer, { foreignKey: 'from_account_id', as: 'outgoingTransfers' });
Beneficiary.hasMany(Transfer, { foreignKey: 'beneficiary_id', as: 'incomingTransfers' });
