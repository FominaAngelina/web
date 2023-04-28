const http = require('node:http')
const express = require('express');
const {router: exportRouterV1} = require('./express');

const hostname = "127.0.0.1";
const port = 5500;

const ApiExpress = require('./express');
const app = express();

app.use(express.static('public'));
app.use('/v1', ApiExpress);

app.listen(port, hostname, () => {
    console.log('server is running');
});