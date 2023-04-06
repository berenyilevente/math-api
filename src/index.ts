import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Request, Response, Express } from 'express';
import { mathRouter } from './routes';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.APP_PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the math api');
});

app.use('/', mathRouter);

app.listen(PORT, () => console.log(`server running: ${PORT}`));

export const api = app;
