import React, { Component } from 'react';




class Todo extends Component {
  render() {
      console.log(this.props.attTodo);
   
    return (
      
      
      this.props.attTodo.map((todoitem) => (
        <h1>{todoitem.name}</h1> 
      ))
    );
     
  }
}


export default Todo;
