var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

import Props1 from './components/Props1';

var family = ["Justin", "Katie", "Kallie", "Zoey", "Nox", "Pax"];

var justin = {
    name: "justin leggett",
    birthday: "09/30/1981",
    sayName: function() {
        console.log("name = " + this.name);
    }
}

justin.sayName();

class App extends React.Component {
    render() {
    return (
        <div>
            <h1>Name: {this.props.name}</h1>
            <h3>username: {this.props.username}</h3>
            <ul>
                {family.map(function(member) {
                    return <li key={member}> {member} </li>
                })}
            </ul>
        </div>
    )
  }
}

ReactDOM.render(
  <App 
  name = "Justin Leggett"
  username = "justinal64"
  />,
  document.getElementById('app')
);
