import React, { Component } from 'react';
import './App.css';
import Todo from './component/Todo';
import Posts from './component/Posts';
import Addpost from './component/Addpost';
import './component/Custom.css';


class App extends Component {

 
  state = {
    dolist :[

      {"name":"Learning React and Node", "age":30, "car":'Swift'},
      {"name":"Imporove yourself as Strong on Technology", "age":25, "car":'BMW'},
      {"name":"Go outside and earn more ", "age":3, "car":'AAdi'}
      
    ]};


  render() {
    return (
      <div className = "customStyle">
      <Todo attTodo={this.state.dolist}/>
      <hr/>
      <Addpost/>
      <hr/>
      
      <Posts/>
    
      </div>
    );
  }
}

export default App;
