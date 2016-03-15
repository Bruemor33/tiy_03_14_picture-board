var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

//Local Inports
var model = require('../models/photo-model');

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var picForm = new model.PhotoCollection();
var PictureForm = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  //Submission Event Handler
  handleSubmit: function(e){
    e.preventDefault();
    var inputData = $(e.currentTarget).serilizeObject();
    console.log(this.props.collection);
    this.getCollection().create(inputData);
  },

  //Render Method
  render: function(){
    return(
      <form id="input-form" onSubmit={this.handleSubmit}>
        <input className="pic-url" placeholder="Url" />
        <input className="pic-caption" placeholder="Caption" />
        <button className="btn btn-danger">Cancel</button>
        <button className="btn btn-primary">Submit</button>
      </form>
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
