"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect() {
    client.connect(process.env.MONGODB_URI, (err, db) => {
    // client.connect('mongodb://localhost:27017/postusanri', (err, db) => {
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo");
    });
  },
  sports(){
    return _db.collection('test');
  }
}
