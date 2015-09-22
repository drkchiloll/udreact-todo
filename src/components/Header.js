var React = require('react');

var Header = module.exports = React.createClass({
  handleClick : function() {
    //Send value of text input to Firebase
    var todo = React.findDOMNode(this.refs.todo).value;
    console.log(todo);
  },
  render : function() {
    return (
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          ref='todo'/>
        <span className='input-group-btn'>
          <button
            className='btn btn-default'
            type='button'
            onClick={this.handleClick}>
            Add
          </button>
        </span>
      </div>
    );
  }
})
