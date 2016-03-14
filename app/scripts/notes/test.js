var React = require('react');
var ReactDOM = require('react-dom');

//This is a react Component
var IcecreamList = React.createClass({
  render: function(){
    return <div>Stuff Here</div>
  }
});

//When you literally have exactly what the instructor has and it still doesn't fucking work.

ReactDOM.render(
  <IceCreamList />,
  document.getElementById('app')
);
