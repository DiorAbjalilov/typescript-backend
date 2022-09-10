import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { routers } from './routers';

// express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// dot env file config
dotenv.config();

// connect mongoodb
connectDB();

// dotenv port connect
const PORT: any = process.env.PORT || 5000;

app.get('/api', routers);

app.listen(PORT, (): void => {
  console.log('======== * SERVER RUNING * =======');
  console.log(`Express server runing on port ${PORT}`);
});
