import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

const dbName = process.env.DB_NAME || 'readradar_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || 'localhost';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  logging: false, // Prevents terminal clutter, keeps production logs pristine
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true, // Automatically provides createdAt and updatedAt fields globally
    underscored: true, // Enforces snake_case column formatting inside MySQL schemas
  }
});

export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('📦 MySQL Database connection successfully established.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
};