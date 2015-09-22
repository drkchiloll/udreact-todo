var React = require('react'),
    ReactFire = require('reactfire'),
    Firebase = require('firebase');

var fbUrl = 'https://reactutodo.firebaseio.com/';

var App = React.createClass({
  mixins : [ReactFire],
  componentWillMount : function() {
    this.bindAsObject(new Firebase(fbUrl + 'items/'), 'items');
  },
  render: function() {
    return (
      <h1 className="red">
        Hello!
      </h1>
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
