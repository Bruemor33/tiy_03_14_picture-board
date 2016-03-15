var $ = require('jquery');
var Backbone = require('backbone');

//Define the model
var PhotoModel = Backbone.Model.extend({

});

//Define the collection
var PhotoCollection = Backbone.Model.extend({
  model: PhotoModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/andrew-image-board'
});

//Exports
module.exports ={
  'PhotoModel': PhotoModel,
  'PhotoCollection': PhotoCollection
}
