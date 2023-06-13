const db = require('mongodb').Db;
const {ObjectId} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://127.0.0.1:27017', {monitorCommands: true});

let myDB = 'local';
let keys = 'API keys';
let models = 'Models';

async function serviceGetModels(){
    try{
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).find({}, {projection: {_id: 1, name: 1}}).toArray();
    return result;
    }
    catch (err){
        res.status(400).send('');
    }
}

async function serviceGetModelID(id){
    try{
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).findOne({_id: new ObjectId(id)});
    return result;
}
catch (err){
    res.status(400).send("Такой модели нет");
}
}

async function serviceDeleteModelID(id){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).deleteOne({_id: new ObjectId(id)});
    if (!result) ;
    else return result;
}

async function serviceCheckKey(key){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(keys).findOne({key : key}, {projection:{user:1, _id: 0}});
    if (!result) console.log("error");
    else return result;
}

async function servicePostModels(author, model, name, type, desc, comments, date, date){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).insertOne({author: author, model: model, name: name, type: type, description: desc, comments: comments, date: date, change: date});
    console.log(result);
    return result;
}

async function servicePutModelsID(id, updateAuthor, model, updateModel){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let name, Models, type, description, comments, author;
    if (model.author != updateAuthor && updateAuthor != "") author = updateAuthor;
    if (model.model != updateModel.model && updateModel.model != "") Models = updateModel.model;
    if (model.name != updateModel.name && updateModel.name != "") name = updateModel.name;
    if (model.type != updateModel.type && updateModel.type != "") type = updateModel.type;
    if (model.description != updateModel.description && updateModel.description != "") description = updateModel.description;
    console.log(updateModel.comments);
    comments = updateModel.comments;
    let check = new Date();
    let result = await connection.db(myDB).collection(models).updateOne({_id: new ObjectId(id)}, {$set: {author: updateAuthor, model: Models, name: name, type: type, description: description, comments: comments, change: check}});
    console.log(result);
    return result;
}

module.exports = {
    serviceGetModels,
    serviceGetModelID,
    serviceCheckKey,
    servicePostModels,
    serviceDeleteModelID,
    servicePutModelsID,
}