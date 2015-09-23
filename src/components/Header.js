var React = require('react');

var Header = module.exports = React.createClass({
  getInitialState : function() {
    return {
      text : ''
    };
  },
  handleInputChange : function(evnt) {
    this.setState({ text : evnt.target.value });
  },
  handleClick : function() {
    //Send value of text input to Firebase
    this.props.itemsStore.push({
      text : this.state.text,
      done : false
    });
    this.setState({ text : '' });
  },
  render : function() {
    return (
      <div className='input-group'>
        <input
          type='text'
          value={this.state.text}
          className='form-control'
          onChange={this.handleInputChange}/>
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
