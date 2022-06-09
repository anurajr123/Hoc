import React, { Component } from 'react';
const expression = 'Happy';
const HOC = (OrComponent) => {
  class NewComponent extends Component{
    render() {
      return (
        <OrComponent 
         data= "Hello World"
         />
      )
    }
  }
  return NewComponent
}
export default HOC;