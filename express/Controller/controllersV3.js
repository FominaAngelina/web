const {serviceGetModels: GetModels} = require('../Services/servicesV3');
const {serviceGetModelID: GetModelID} = require('../Services/servicesV3');
const {servicePostModels: PostModels} = require('../Services/servicesV3');
const {serviceCheckKey: checkKey} = require('../Services/servicesV3');
const {serviceDeleteModelID: DeleteModelID} = require('../Services/servicesV3');
const {servicePutModelsID: PutModelsID} = require('../Services/servicesV3');

let result;

async function controlGetModels(req, res, next){
    //checkId
    try{
    result = await GetModels(); // любая проверка с ожиданием ответа
    console.log(result);
    res.status(200).send(result);
    }
    catch(error){
        let err = new Error(error.message);
        err.status = "error";
        next(err);
    }
}

async function controlGetModelID(req, res, next){
    try{
    let id = req.params['id'];
    result = await GetModelID(id);
    res.send(result);
    }
    catch(error){
        let err = new Error(error.message);
        err.status = "error";
        next(err);
    }
}

async function controlDeleteModelID(req, res, next){
    try{
        let key = req.headers['x-api-key']
    let author = await checkKey(key);
    let id = req.params['id'];
    result = await DeleteModelID(id);
    res.send(result);
    }
    catch(error){
        let err = new Error(error.message);
        err.status = "error";
        next(err);
    }
}

async function controlPostModels(req, res, next){
    try{
    let key = req.headers['x-api-key']
    let author = await checkKey(key);
    let model = req.body.model;
    let name = req.body.name;
    let desc = req.body.description;
    let type = req.body.type;
    let comments = req.body.comments;
    let date = new Date();
    console.log(author, model, name, type, desc, comments, date, date);
    result = await PostModels(author, model, name, type, desc, comments, date, date);
    res.send("Модель добавлена!");
    }
    catch(error){
        let err = new Error(error.message);
        err.status = "error";
        next(err);
    }
}

async function controlPutModelsID(req, res, next){
    try{
    let key = req.headers['x-api-key']
    let author = await checkKey(key);
    let id = req.params['id'];
    let model = await GetModelID(id);
    let updateModel = req.body;
    result = await PutModelsID(id, author, model, updateModel);
    res.send(result);
    }
    catch(error){
        let err = new Error(error.message);
        err.status = "error";
        next(err);
    }
}

module.exports = {
    controlGetModels,
    controlGetModelID,
    controlPostModels,
    controlDeleteModelID,
    controlPutModelsID
}