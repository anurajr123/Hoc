import React, { Component } from 'react';
import HOC from './HOC';
class App extends Component{
  render() {
    return (
      <div className="App">
        <div>
          Hello World in App.js {<br/>}
          {this.props.data} &nbsp; From HOC
        </div>
      </div>
    );
  }
}
export default HOC(App);