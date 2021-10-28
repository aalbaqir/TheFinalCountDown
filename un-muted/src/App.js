import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchBar from './components/Search';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/SignUp.js';
import Article from './Article';
import Profile from './components/Profile';
import CardFlip from './CardFlip';
import FlipCard from './components/FlipCard';

function App() {

  const [articlesPitStop, setArticlesPitStop] = useState([])
  
  console.log(articlesPitStop)

  // const [currentUser, setCurrentUser] = useState('')

  // useEffect(()=>{
  // fetch('http://localhost:3000/me')
        
  // .then(response => {
  //    if (response.ok){
  //     response.json().then(user => setCurrentUser(user))
  //   }  
  // })

  // },[])

  // if(!currentUser) return<Login setCurrentUser={setCurrentUser}/> 

  const appToHome=(homeArticles)=>{
    console.log("Homing Signal", homeArticles)
    setArticlesPitStop(homeArticles)
  }

  const justPassing=(filteredArticles)=>{
    console.log("In App", filteredArticles)
    appToHome(filteredArticles)
  }


  return (<>
    <BrowserRouter>
          
          
          
          <NavBar justPassing={justPassing}
          appToHome={appToHome}/>
        
          {/* <Article/> */}
        
        <Switch>
          
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/Search' component={SearchBar}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Home'> <Article appToHome={appToHome} articlesPitStop={articlesPitStop} text={"text"} /> </Route>
            <Route exact path='/FlipCard' component={FlipCard}/>

            {/* <Route exact path='/Home' component={CardFlip}/> */}
            <Route exact path='/SignUp' component={Signup}/>
            <Route exact path='/Logout' component={Logout}/>
            {/* <Route exact path='/' component={Article}/> */}
            






          
        </Switch>  
      
      
      
      </BrowserRouter>
  
 


 
 
 
 </> );
}

export default App;
