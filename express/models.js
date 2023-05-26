const express = require('express');
const router = express.Router();
const {controlGetModels: getModels} = require('./Controller/controllersV3');
const {controlGetModelID: getModelID} = require('./Controller/controllersV3');
const {controlPostModels: postModels} = require('./Controller/controllersV3');
const {controlDeleteModelID: deleteModelID} = require('./Controller/controllersV3');

router.use(express.json());

router.get('/models', getModels);
router.get('/models/:id', getModelID);
router.post('/:key/models', postModels);
router.delete('/models/:id', deleteModelID);

module.exports = {
    router
}