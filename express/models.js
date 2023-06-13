const express = require('express');
const router = express.Router();
const {controlGetModels: getModels} = require('./Controller/controllersV3');
const {controlGetModelID: getModelID} = require('./Controller/controllersV3');
const {controlPostModels: postModels} = require('./Controller/controllersV3');
const {controlDeleteModelID: deleteModelID} = require('./Controller/controllersV3');
const {controlPutModelsID: PutModelsID} = require('./Controller/controllersV3');
const {midCheckKey: CheckKey} = require('./Middlewares/middlewareV3');

router.use(express.json());

router.get('/models', getModels);
router.get('/models/:id', getModelID);
router.post('/models', CheckKey, postModels);
router.delete('/models/:id',CheckKey, deleteModelID);
router.put('/models/:id', CheckKey, PutModelsID);
router.get('/', (req, res) => {
    res.status(200).send('Hello World V3!');
});

module.exports = {
    router
}