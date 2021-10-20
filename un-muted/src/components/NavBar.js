import './NavBar.css';

import React from 'react';
import {NavLink} from 'react-router-dom'
import SearchBar from './Search';



function NavBar(){



    return(<>

        
       <div className="logo">
            <NavLink className="logo-button" to="./">
            <img src="https://api.freelogodesign.org/files/62f4fbcc1eda407da1ed85a6ad83fa87/thumb/logo_200x200.png?v=637697072720000000" alt="logo"/>
          
            </NavLink>
            </div>
            {/* <br>
            </br> */}

           

        <nav className="navbar">
            
            <NavLink className="button" to="/Home">
                Home
            </NavLink>
         
            <NavLink className="button" to="/Profile">
              Profile
            </NavLink>
            <NavLink className="button" to="/">
               Login
            </NavLink>
            <NavLink className="button" to="/Signup">
               Sign Up
            </NavLink>
        
           
           
         
          
   
            </nav> 
    
    
    
    
    
    </>)
}

export default NavBar;