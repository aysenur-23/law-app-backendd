// Import necessary modules
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
}
from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from './src/app.module';
import * as functions from 'firebase-functions';

const server: express.Express = express();

// Define a function to create a NestJS server within an Express instance
export const createNestServer = async (expressInstance: express.Express) => {
  // Create an ExpressAdapter with the Express instance
  const adapter = new ExpressAdapter(expressInstance);

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
    {},
  );

  app.enableCors();

  // Initialize the application and return it
  return app.init();
};

createNestServer(server)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .then((v) => console.log('Nest Ready')) // Log success message
  .catch((err) => console.error('Nest broken', err)); // Log error message

//export const api: functions.HttpFunction = functions.https.onRequest(server);
const app = express();

app.get('/api', (req, res) => {
  res.send('Merhaba, Dünya!');
});

export const api = functions.https.onRequest(app);
