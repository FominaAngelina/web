const {serviceGetModels: GetModels} = require('../Services/servicesV3');
const {serviceGetModelID: GetModelID} = require('../Services/servicesV3');
const {servicePostModels: PostModels} = require('../Services/servicesV3');
const {serviceCheckKey: checkKey} = require('../Services/servicesV3');
const {serviceDeleteModelID: DeleteModelID} = require('../Services/servicesV3');

let result;

async function controlGetModels(req, res){
    //checkId
    result = await GetModels(); // любая проверка с ожиданием ответа
    res.send(result);
}

async function controlGetModelID(req, res){
    let id = req.params['id'];
    result = await GetModelID(id);
    res.send(result);
}

async function controlDeleteModelID(req, res){
    let id = req.params['id'];
    result = await DeleteModelID(id);
    res.send(result);
}

async function controlPostModels(req, res){
    let key = req.params['key'];
    let author = await checkKey(key);
    let name = req.body.name;
    let desc = req.body.description;
    let type = req.body.type;
    let comments = req.body.comment;
    let date = new Date();
    result = await PostModels(author, name, type, desc, comments, date, date);
    res.send("Модель добавлена!");
}

module.exports = {
    controlGetModels,
    controlGetModelID,
    controlPostModels,
    controlDeleteModelID,
}