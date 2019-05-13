// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, db)=>{
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");


  db.collection('Todos').insertOne({
    text: 'seodsad',
    completed: false
  },(err, result)=>{
    if(err){
      return console.log("unable to do insert");
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

db.collection('users').insertOne({
  name: 'rohit',
  age: '22',
  location: 'dhn'
}, (err,result)=>{
  if(err){
    return console.log("unable to insert");
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

  db.close();
});
