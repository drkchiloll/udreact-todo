var React = require('react'),
    ReactFire = require('reactfire'),
    Firebase = require('firebase'),
    Header = require('./components/Header');

var fbUrl = 'https://reactutodo.firebaseio.com/';

var App = React.createClass({
  mixins : [ReactFire],
  componentWillMount : function() {
    this.bindAsObject(new Firebase(fbUrl + 'items/'), 'items');
  },
  render: function() {
    return (
      <div className='row panel panel-default'>
        <div className='col-md-8 col-md-offset-2'>
          <h2 className='text-center'>
            To-Do List
          </h2>
          <Header />
        </div>
      </div>
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
