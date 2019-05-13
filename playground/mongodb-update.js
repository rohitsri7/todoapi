// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, db)=>{
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5cd9493c6b411b33b851ee2a')
 // },{
 //   $set: {
 //     completed: true
 //   }
 // },{
 //     returnOrignal: false
 //   }).then((result)=>{
 //     console.log(result);
 //   });

   db.collection('users').findOneAndUpdate({
     _id: new ObjectID('5cd926458a8b400900bedc79')
   },{
       $set: {
         name: 'rex'
       },
       $inc:{
         age: 1
       }
     },{
         returnOrignal: false
       }).then((result)=>{
         console.log(result);
       });


});
