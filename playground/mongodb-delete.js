// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, db)=>{
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  // db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result)=>{
  //   console.log(result);
  // });

// db.collection('Todos').deleteOne({text: 'say'}).then((result)=>{
//   console.log(result);
// });

db.collection('users').findOneAndDelete({
  _id: new ObjectID('5cd947e99885b1332c39c5ff')
}).then((result)=>{
  console.log(result);
});

});
