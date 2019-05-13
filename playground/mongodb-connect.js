// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, db)=>{
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  db.collection('Todos').find({
    _id: new ObjectID('5cd922248ea7972a58b9235e')
    }).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("unable to fetch data");
  });

  // db.collection('Todos').insertOne({
  //   text: 'seodsad',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log("unable to do insert");
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

// db.collection('users').insertOne({
//   name: 'rohit',
//   age: '22',
//   location: 'dhn'
// }, (err,result)=>{
//   if(err){
//     return console.log("unable to insert");
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

  //db.close();
});
