var Backbone = require('backbone');
var $ = require('jquery');


//The assignment os to create a like button application.
//Based on what we know about models, we need to create one to place the functionality of it.
//This like button needs to start at 0 likes, and with every click, update with how many clicks or 'likes' have happened.
//So if we have clicked the button twice it should read '2 likes' or '1 like' depending on how many times you clicked the button.

//I believe I need to store the number of clicks. Would I do this by using an .each within m

var Like = Backbone.Model.extend({ //What from the model do I need in order to add a button click functionality?

  defaults: {
    'quantity': 0,
    'one-like': 'like',
    'plus-like': 'likes'
  },

  likeIncrease: function(){
    var newQty = this.get('quantity') + 1;
    this.set({'quantity': newQty});
    console.log(newQty);
    $('.like-value').empty();
    $('.like-value').html(this.get('quantity') + this.toJSON());

  },

  toJSON: function(){
    if(this.get('quantity') === 1){
      return ' like'
    }else{
      return ' likes'
    }
  }
  

});

module.exports = Like;
