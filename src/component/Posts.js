import React, { Component } from 'react'

class Posts extends Component {    
    constructor(props){
        super(props);
        this.state ={
            title :"",
            postdata : []
        }
        this.openwindow = this.openwindow.bind(this);
    }
    onSubmit = (e) => {
        e.preventDefault();
        //this.props.addTodo(this.state.title);
        const getdata = [...this.state.postdata,{"title":this.state.title}];
       // const getdata = {title: this.state.title};
        this.setState({postdata:getdata});
        console.log(this.state.postdata);
        //this.setState({title:''});
    }
    addTodoitem = (e) =>{
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }

   
  
componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(data => this.setState({postdata : data}));
}

openwindow(e) {
    this.setState ({[e.target.name] : e.target.value})
    console.log('event triggered');
    
}

styles = () => {
    return {
        background : '#f4f4f4',
        padding: '2px',
        borderBottom: '1px #ccc dotted'
    } 

}

selectPost = (e) => {

    console.log('Select Post');

    console.log(this.state);
}


render() {
   let  postItem ="";
    if(this.state.postdata){
     postItem = this.state.postdata.map((posts,index) => (
        <div key={index} style={this.styles()}>
           <input type='checkbox' onChange={this.selectPost}/>
         <div>{posts.title}</div>
            
        </div>
    ))
    }

    return (
        
        <div className = "postStyle">
            <form onSubmit={this.onSubmit} >
        <input type='text' name = 'title' value = {this.state.title} onChange = {(e) => this.addTodoitem(e)}/>

        <button type='sumbit' value='Submit' className='btn'>Submit</button>
        </form>
        <h1>Posts</h1>
        {postItem}
        <hr/>
        </div>
    );
  }
}


export default Posts;