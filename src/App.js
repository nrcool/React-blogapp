import React from 'react';
import './App.css';
import Home from './components/Home';
import Createpost from './components/Createpost';
import ShowallPosts from './components/ShowallPosts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
       <Createpost/>
       <ShowallPosts/>
    </div>
  );
}

export default App;
