import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';
import { Book } from './Book';

interface PriceAlertAttributes {
  id: string;
  userId: string;
  bookId: string;
  targetPrice: number;
  isActive: boolean;
  lastNotifiedPrice: number | null;
}

export interface PriceAlertCreationAttributes extends Optional<PriceAlertAttributes, 'id' | 'isActive' | 'lastNotifiedPrice'> {}

export class PriceAlert extends Model<PriceAlertAttributes, PriceAlertCreationAttributes> implements PriceAlertAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public targetPrice!: number;
  public isActive!: boolean;
  public lastNotifiedPrice!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PriceAlert.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    targetPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    lastNotifiedPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'PriceAlert',
    tableName: 'price_alerts',
  }
);

// Setup direct entity associations
User.hasMany(PriceAlert, { foreignKey: 'userId', as: 'priceAlerts' });
PriceAlert.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Book.hasMany(PriceAlert, { foreignKey: 'bookId', as: 'priceAlerts' });
PriceAlert.belongsTo(Book, { foreignKey: 'bookId', as: 'book' });