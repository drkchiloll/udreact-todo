var React = require('react'),
    ListItem = require('./ListItem');

var List = module.exports = React.createClass({
  renderList : function() {
    var items = this.props.items;
    if(!items) items = {};
    if(Object.keys(items).length === 0) {
      return (
        <h4> Add a Todo to get started. </h4>
      );
    } else {
      return Object.keys(items).map(function(key) {
        var item = items[key];
        item.key = key;
        return (
          <ListItem key={key} item={item} />
        );
      })
    }
  },
  render : function() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
});
