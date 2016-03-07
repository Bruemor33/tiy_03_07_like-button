console.log("Hello World!");
var $ = require('jquery');

var Like = require('./models/like');

var button = new Like();

$('.like-button').on('click',function(event){
  button.likeIncrease();

  console.log('I was clicked');

});
