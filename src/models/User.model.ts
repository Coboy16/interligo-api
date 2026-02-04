import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { User as UserInterface } from '../types';

interface UserCreationAttributes extends Optional<UserInterface, 'id'> {}

export class User extends Model<UserInterface, UserCreationAttributes> implements UserInterface {
  public id!: string;
  public username!: string;
  public password!: string;
  public name!: string;
  public email!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
);
