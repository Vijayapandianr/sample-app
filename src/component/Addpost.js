import React, { Component } from 'react'

export class Addpost extends Component {

    constructor(props){
        super(props);
        this.state ={
            title :"",
            age :"",
            car :"",
            photosdata:[]
        }
        
    }
    

    Addpost = (e) => {
        e.preventDefault();
     console.log(this.state.title);
        const  newpost = [...this.state.photosdata, { "title":this.state.title}];
        this.setState({photosdata:newpost})
    //     console.log(newpost);

    }
    Addpostitem= (e) =>{
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(res => res.json())
            .then(data => this.setState({photosdata : data}));
    }


    render() {
        let resultpost ='';
        console.log(this.state.photosdata);
        resultpost = this.state.photosdata.map((posts,index) => (
          <div>
            <div>
                <table>
                    <tr><td>{posts.title}</td><td><img src={posts.thumbnailUrl}/></td></tr></table></div>
            </div>
      ))
        return (    
            <div>
                <form name='addpost' onSubmit={this.Addpost}>
                    <input type='text' name='title' value={this.state.name} onChange = {(e) => this.Addpostitem(e)}/>
                    <input type='text' name='age' value={this.state.age} onChange = {(e) => this.Addpostitem(e)}/>
                    <input type='text' name='car' value={this.state.car} onChange = {(e) => this.Addpostitem(e)}/>
                    <button type='submit' name='submit'>Submit</button>
                </form>

                <div>{resultpost}</div>
            </div>

            
        )
    }
}

export default Addpost
