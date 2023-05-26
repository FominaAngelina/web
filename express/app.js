const http = require('node:http')
const express = require('express');
const {router: exportRouterV1} = require('./express');
const {router: exportRouterV2} = require('./mongoDB');
const {router: exportRouterV3} = require('./models');

const hostname = "127.0.0.1";
const port = 5500;


const app = express();

function func(req, res){
    res.status(400).send('Такого пути нет!');
}

app.use(express.static('public'));
app.use('/v1', exportRouterV1);
app.use('/v2', exportRouterV2);
app.use('/v3', exportRouterV3);

app.use(func);
app.listen(port, hostname, () => {
    console.log('server is running');
});