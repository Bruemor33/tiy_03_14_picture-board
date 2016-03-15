var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var model = require('./models/photo-model');
var PhotoItem = require('./components/pic-display');
var PictureForm = require('./components/pic-form');

var newPhoto = new model.PhotoModel;
var newPhotoCollection = new model.PhotoCollection;

newPhoto = {
  caption: 'caption here'
}
