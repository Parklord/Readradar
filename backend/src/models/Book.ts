import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface BookAttributes {
  id: string;
  googleBooksId: string | null;
  title: string;
  author: string;
  isbn: string | null;
  publisher: string | null;
  publishedDate: string | null;
  description: string | null;
  pageCount: number | null;
  coverUrl: string | null;
  category: string | null;
}

export interface BookCreationAttributes extends Optional<BookAttributes, 'id' | 'googleBooksId' | 'isbn' | 'publisher' | 'publishedDate' | 'description' | 'pageCount' | 'coverUrl' | 'category'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: string;
  public googleBooksId!: string | null;
  public title!: string;
  public author!: string;
  public isbn!: string | null;
  public publisher!: string | null;
  public publishedDate!: string | null;
  public description!: string | null;
  public pageCount!: number | null;
  public coverUrl!: string | null;
  public category!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    googleBooksId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    publisher: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    publishedDate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coverUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  }
);