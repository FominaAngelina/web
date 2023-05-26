const db = require('mongodb').Db;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', {monitorCommands: true});

async function selectDB(suggestDB) {
    if (!suggestDB) {
        throw new Error('Database is not defined');
    }
    try{
        let database = client.db(suggestDB);
    }
    catch(err){
        throw new Error(`Database ${suggestDB} not found`);
    }
    finally{
        return database;
    }
}

module.exports = {
    selectDB
}