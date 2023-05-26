const db = require('mongodb').Db;
const {ObjectId} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://127.0.0.1:27017', {monitorCommands: true});
//const {selectDB : selectDB} = require('../Configs/config');

let myDB = "local"; // local database
let coll = "Comments"; // collection comments

async function postComments(comment, author){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let date = new Date();
    let result = await connection.db(myDB).collection(coll).insertOne({comment : comment, author: author, date: date});
    return result;
}

async function getCommentId(id){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(coll).findOne({_id: new ObjectId(id)});
    return result;
}

async function getComments(){
    let connection = await client.connect(function(err){
        if (err){
            throw err;
        }
    });
    let result = await connection.db(myDB).collection(coll).find({},{projection: {comment: 1, author: 1, _id: 0}}).toArray();
    return result;
}

module.exports = {
    postComments,
    getCommentId,
    getComments
}