var React = require('react');
var ReactDOM = require('react-dom');

class Badge extends React.Component {
  render() {
    var name = "Justn Leggett";
    var username = "justinal64";
    var img = "google.com";
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge />,
  document.getElementById('app')
);