const db = require('mongodb').Db;
const {ObjectId} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://127.0.0.1:27017', {monitorCommands: true});

let myDB = 'local';
let keys = 'API keys';
let models = 'Models';

async function serviceGetModels(){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).find({}, {projection: {_id: 1, name: 1}}).toArray();
    return result;
}

async function serviceGetModelID(id){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).findOne({_id: new ObjectId(id)});
    return result;
}

async function serviceDeleteModelID(id){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).deleteOne({_id: new ObjectId(id)});
    if (!result) result.status(400).send('wkjjcbwkj');
    else return result;
}

async function serviceCheckKey(key){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(keys).findOne({key : key}, {projection:{user:1, _id: 0}});
    if (!result) ;
    else return result;
}

async function servicePostModels(author, name, type, desc, comments, date, date){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(models).insertOne({author: author, name: name, type: type, description: desc, comments: comments, date: date, change: date});
    console.log(result);
    return result;
}

module.exports = {
    serviceGetModels,
    serviceGetModelID,
    serviceCheckKey,
    servicePostModels,
    serviceDeleteModelID,
}