import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
export declare const createNestServer: (expressInstance: express.Express) => Promise<NestExpressApplication<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>>;
export declare const api: functions.https.HttpsFunction;
