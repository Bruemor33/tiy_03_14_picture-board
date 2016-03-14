var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var model = require('../models/photo-model');

var picForm = new model.PhotoCollection();
var PictureForm = React.createClass({
  render: function(){
    return(
      <div>
        <input className="pic-url" placeholder="Url" />
        <input className="pic-caption" placeholder="Caption" />
      </div>
    );
  }
});

ReactDOM.render(
  <PictureForm />,
  document.getElementById('image-form')
);

module.exports = {
  'PictureForm': PictureForm
}
