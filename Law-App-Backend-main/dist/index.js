"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.createNestServer = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const app_module_1 = require("./src/app.module");
const functions = require("firebase-functions");
const server = express();
const createNestServer = async (expressInstance) => {
    const adapter = new platform_express_1.ExpressAdapter(expressInstance);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter, {});
    app.enableCors();
    return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
    .then((v) => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));
const app = express();
app.get('/api', (req, res) => {
    res.send('Merhaba, Dünya!');
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map