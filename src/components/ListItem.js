var React = require('react'),
    Firebase = require('firebase'),
    fbUrl = 'https://reactutodo.firebaseio.com/';

var ListItem = module.exports = React.createClass({
  getInitialState : function() {
    return {
      text : this.props.item.text,
      done : this.props.item.done,
      textChanged : false
    };
  },
  componentWillMount : function() {
    this.fb = new Firebase(fbUrl + 'items/' + this.props.item.key);
  },
  handleDoneChange: function(evnt) {
    var update = { done : evnt.target.checked };
    // console.log(update)
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick : function() {
    this.fb.remove();
  },
  handleTextChange : function(evnt) {
    this.setState({
      text : evnt.target.value,
      textChanged : true
    });
  },
  handleSaveClick : function(evnt) {
    this.fb.update({text : this.state.text});
    this.setState({textChanged : false});
  },
  handleUndoClick : function(evnt) {
    this.setState({
      text : this.props.item.text,
      textChanged : false
    })
  },
  changesButtons : function() {
    if(!this.state.textChanged) return null;
    return (
      [
        <button
          className='btn btn-default'
          onClick={this.handleSaveClick}>
            Save
        </button>,
        <button
          className='btn btn-default'
          onClick={this.handleUndoClick}>
            Undo
        </button>
      ]
    );
  },
  render : function() {
    return (
      <div className='input-group'>
        <span className='input-group-addon'>
          <input
            type='checkbox'
            onChange={this.handleDoneChange}
            checked={this.state.done}/>
        </span>
        <input
          type='text'
          disabled={this.state.done}
          className='form-control'
          value={this.state.text}
          onChange={this.handleTextChange}/>
        <span className='input-group-btn'>
          {this.changesButtons()}
          <button
            className='btn btn-default'
            onClick={this.handleDeleteClick}>
              Delete
          </button>
        </span>
      </div>
    );
  }
});
