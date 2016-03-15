var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var model = require('../models/photo-model');

//Create Component
var photosCollection = new model.PhotoCollection();
var PhotoItem = React.createClass({
  render: function(){
    return (
      <div>
        <img />
        <imageCaption />
      </div>
    )
  }
});

//Create the Photo List
var PhotoList = React.createClass({
  render: function(){
    mixins: [Backbone.React.Component.mixin]
    var photosList = this.getCollection().map(function(photo){
      return (
        <PhotoItem model={photo} />
      )
    });
    return(
      <ul>
        {photosList}
      </ul>
    )
  }
});

//Create Photo Caption
var PhotoCaption = React.createClass({
  render: function(){
    mixins: [Backbone.React.Component.mixin]
    return(<p>{this.getModel().get('caption')}</p>);
  }
})

ReactDOM.render(
  <PhotoItem />,
  document.getElementById('image')
);

module.exports = {
  'PhotoItem': PhotoItem
}
