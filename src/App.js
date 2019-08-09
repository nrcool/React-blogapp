import React from 'react';
import './App.css';
import Home from './components/Home';
import Createpost from './components/Createpost';
import ShowallPosts from './components/ShowallPosts';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Router>
      <Navbar/>
      <Switch>
       <Route exact path="/" component={Home}/> 
       <Route path="/createpost" component={Createpost}/>
       <Route path="/showallposts" component={ShowallPosts}/>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
