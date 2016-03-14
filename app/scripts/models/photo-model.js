var $ = require('jquery');
var Backbone = require('backbone');

//Define the model
var PhotoModel = Backbone.Model.extend({

});

//Define the collection
var PhotoCollection = Backbone.Model.extend({
  model: PhotoModel,
  url: 'https://unsplash.com/collections/203/explore-canada'
});

//Exports
module.exports ={
  'PhotoModel': PhotoModel,
  'PhotoCollection': PhotoCollection
}
