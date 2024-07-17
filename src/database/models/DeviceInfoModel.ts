import { DataTypes, Model, Optional } from 'sequelize';
import todoSequelize from '../setup/database';
import { DeviceInfoAttributes } from '../../interfaces/db-models/DeviceInfoAttributes';

interface DeviceInfoCreationAttributes
  extends Optional<DeviceInfoAttributes, 'id'> {}

// Define the DeviceInfo model class
class DeviceInfoModel
  extends Model<DeviceInfoAttributes, DeviceInfoCreationAttributes>
  implements DeviceInfoAttributes
{
  public id!: number;

  public userId!: number;

  public baseOS!: string;

  public version!: string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

DeviceInfoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Nur der Primärschlüssel sollte autoIncrement sein
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    baseOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING, // Ändere den Typ zu STRING, wenn es sich um Text handelt
      allowNull: false,
    },
  },
  { tableName: 'DeviceInfos', sequelize: todoSequelize },
);

export default DeviceInfoModel;
