import express from 'express';
import 'express-async-errors';
import { queuesRouter } from './routes/queues';
import cors from 'cors';

const app = express();

//settings
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routes
app.use('/api', queuesRouter);
app.all('*', async () => { throw new Error('page not found'); });


export { app }
