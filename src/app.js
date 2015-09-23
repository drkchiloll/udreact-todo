var React = require('react'),
    ReactFire = require('reactfire'),
    Firebase = require('firebase'),
    Header = require('./components/Header'),
    List = require('./components/List');

var fbUrl = 'https://reactutodo.firebaseio.com/';

var App = React.createClass({
  getInitialState : function() {
    return {
      items : {},
      loaded : false
    }
  },
  mixins : [ReactFire],
  componentWillMount : function() {
    this.fb = new Firebase(fbUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  handleDataLoaded : function() {
    this.setState({ loaded : true });
  },
  onDeleteDoneClick : function() {
    var items = this.state.items;
    Object.keys(items).map(function(key) {
      if(items[key].done === true) {
        this.fb.child(key).remove();
      }
    }.bind(this));
  },
  deleteButton : function() {
    if(!this.state.loaded) {
      return;
    } else {
      return (
        <div className='text-center clear-complete'>
          <hr/>
          <button
            type='button'
            onClick={this.onDeleteDoneClick}
            className='btn btn-default'>
            Clear Complete
          </button>
        </div>
      );
    }
  },
  render: function() {
    return (
      <div className='row panel panel-default'>
        <div className='col-md-8 col-md-offset-2'>
          <h2 className='text-center'>
            To-Do List
          </h2>
          <Header itemsStore={this.firebaseRefs.items} />
          <hr />
          <div className={'content ' + (this.state.loaded ? 'loaded' : '')}>
            <List items={this.state.items} />
            {this.deleteButton()}
          </div>
        </div>
      </div>
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
