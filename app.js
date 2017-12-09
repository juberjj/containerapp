var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000

var mongodb = require('mongodb').MongoClient

var url = 'mongodb://127.0.0.1:27017/books'


 app.get('/',function(req,res){

 	res.send('Server is running');
 })

 app.get('/books', function(req, res){

 	mongodb.connect(url, function(err, db){

 		if(err){
 			console.log('Unable to connect to the Server ' + err)
 		}else{
 			console.log('Conection stablished')
 			var collection = db.collection('books')
 			collection.find({}).toArray(function(err, result){
 				if (err){
 					res.send(err)
 				}else{
 					res.send(result)
 				}
 			})
 		}
 	})

 })


 app.listen(port,function(){

 	console.log('Server is running and listening on port ' + port)
 })