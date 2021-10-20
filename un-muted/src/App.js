import './App.css';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchBar from './components/Search';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/SignUp.js';
import NewSignup from './components/NewSignUp.js';
import Article from './Article';
import Profile from './components/Profile';

function App() {

  // fetch('http://localhost:3000')
        
  // .then(response => response.json())
  // .then(local =>{

  //  console.log(local)
  // })

  return (<>
    <BrowserRouter>
          
          
          
          <NavBar/>
        
          {/* <Article/> */}
        
        <Switch>
          
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/Search' component={SearchBar}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Home' component={Article}/>
            {/* <Route exact path='/SignUp' component={Signup}/> */}
            <Route exact path='/SignUp' component={Signup}/>
            <Route exact path='/Logout' component={Logout}/>
            {/* <Route exact path='/' component={Article}/> */}
            






          
        </Switch>  
      
      
      
      </BrowserRouter>
  
 


 
 
 
 </> );
}

export default App;
