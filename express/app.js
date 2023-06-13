const http = require('node:http')
const express = require('express');
const {router: exportRouterV1} = require('./express');
const {router: exportRouterV2} = require('./mongoDB');
const {router: exportRouterV3} = require('./models');
const {midError: error} = require('./Middlewares/middlewareV3');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const openapi_json = require('./openapi.json');
const cors = require('cors');

const hostname = "127.0.0.1";
const port = 5500;


const app = express();

app.use(express.static('public'));
app.use('/v1', exportRouterV1);
app.use('/v2', exportRouterV2);
app.use('/v3', exportRouterV3);
app.use(cors());
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(openapi_json));
app.use(error);
app.use((req, res) => {
    res.status(400).send('Этой страницы не существует!');
});

app.listen(port, hostname, () => {
    console.log('Сервер запущен!');
});