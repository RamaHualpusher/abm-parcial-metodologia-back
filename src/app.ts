import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error-handler';

import personaRouter from './routers/persona-router';
import settings from './lib/settings';

const app = express();
const parseJSON = express.json({ limit: '1mb' });

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/api/personas', parseJSON, personaRouter);
app.use(errorHandler);

app.listen(settings.port, () => {
  return console.log(`Express is listening at http://localhost:${settings.port}`);
});
