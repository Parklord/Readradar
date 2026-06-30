import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, sequelize } from './config/database';

// Load environmental parameters
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration
app.use(cors({ origin: '*' })); 
app.use(express.json());

// Base Route Verification
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'healthy', updates: 'ReadRadar Core API active' });
});

// Central Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`💥 System Error: ${err.message}`);
  res.status(500).json({ error: 'Internal system structural failure.' });
});

// Bootstrap Pipeline
const startServer = async () => {
  // Verify database connectivity
  await connectDB();

  // Synchronize database definitions (uncomment alter line during development schema updates)
  // await sequelize.sync({ alter: true });
  await sequelize.sync();
  console.log('🔄 Database definitions synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`🚀 ReadRadar Core Server executing live on port: ${PORT}`);
  });
};

startServer();