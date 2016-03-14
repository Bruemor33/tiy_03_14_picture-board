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
      <view>
        <image
          source={{uri: 'https://unsplash.com/photos/1EYMue_AwDw'}}
        />
      </view>
    );
  }
});

ReactDOM.render(
  <PhotoItem />,
  document.getElementById('image')
);

module.exports = {
  'PhotoItem': PhotoItem
}
