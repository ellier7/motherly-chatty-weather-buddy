var router = require("express").Router();
var cors = require("cors");
var phraseController = require('../phrases/phraseController.js');
var request = require("request");
var express = require('express')
var app = express();
var qs = require('querystring');  
var Yelp = require('yelp');
 
var yelp = new Yelp({
  consumer_key: "jyK0pX1w36_zOyRDBCQGPA",
  consumer_secret: "fldLTHhsFY4tr_rl8wDwcF_LGaU",
  token: "6TzUIWo9jSnFavceu5JgJKhp1HnnOx89",
  token_secret: "bAvERieQodYWGQk3aoWC8fT3lJ0",
});
 


function getFoodPlaces (req,res){
test= qs.stringify(req.query.food)
	console.log(test)
yelp.search({
    // term: qs.stringify(req.body.food),
    term: test,
    location: 'Manhattan', 
    sort: 2, 
    limit: 10 })
.then(function (data) {
  res.send(data.businesses)
})
.catch(function (err) {
  console.error(err);
});
 	
}


module.exports = {
getFoodPlaces: getFoodPlaces
}

// exports.yelp = function (req, res) {
// 	var foodResults, diningResults, results={};
// 	yelp.search({
// 		term: req.query.food,
// 		location: 'Manhattan', 
//         sort: 2, 
//         limit: 10},
// 		  function(error, foodData) {
// 			// results = {food:foodData}
// 			res.json(foodData.businesses);
// 		})
// 	}