import React from 'react';
import './App.css';
import Home from './components/Home';
import Createpost from './components/Createpost';
import ShowallPosts from './components/ShowallPosts';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends React.Component{
  state={
    username:"",
    title:"",
    content:"",
    Posts:[],
    file:null
}
getusername=(e)=>{
    this.setState({
        username:e.target.value
    })
}
gettitle=(e)=>{
    this.setState({
        title:e.target.value
    })
}
getcontent=(e)=>{
    this.setState({
        content:e.target.value
    })
}
submitform=(e)=>{
    e.preventDefault();
    let post={
        username:this.state.username,
        title:this.state.title,
        content:this.state.content,
        file:this.state.file,
        time:new Date().toLocaleTimeString()
    }
    let allposts=this.state.Posts;
    allposts.push(post);
    this.setState({
        Posts:allposts,
        username:"",
        title:"",
        content:"",

    })
    console.log(this.state)
}
uploadimage=(event)=>{ 
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
}
deleteitem=(i)=>{
  let array=this.state.Posts;
  array.splice(i,1);
  this.setState({
    Posts:array
  }) 

}
  render(){
  
    return (
    <div className="App container">
      <Router>
      <Navbar/>
      <Switch>
       <Route exact path="/" component={Home}/> 
       <Route path="/createpost"
        render={()=>{
          return( <Createpost getcontent={this.getcontent}
          gettitle={this.gettitle}
          getusername={this.getusername}
          submitform={this.submitform}
          username={this.state.username}
          title={this.state.title}
          content={this.state.content}
          uploadimage={this.uploadimage}
          />)}
       
      }
        />
       <Route path="/showallposts" render={()=>{
         return(
           <ShowallPosts all={this.state.Posts} delete={this.deleteitem}/>
         )
       }}/>
       </Switch>
       </Router>
    </div>
  );
  }
  
}

export default App;
