import './SignUp.css';
import './Login.css';
import {NavLink} from 'react-router-dom'


import { useState, useEffect } from 'react';

function Login(props) {
  // console.log(props)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

   
   
   
  

   
    
    const handleSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
      console.log("working")

      
    
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(loggedInUser => {
          console.log(loggedInUser)
          if (loggedInUser.username) {
            // localStorage.token = loggedInUser.token
            localStorage.user_id = loggedInUser.id
            localStorage.user_name = loggedInUser.username
            localStorage.picture= loggedInUser.picture
            localStorage.name =loggedInUser.name
            localStorage.email = loggedInUser.email
            localStorage.country = loggedInUser.country
            localStorage.member_since = loggedInUser.member_since
            console.log(localStorage)
            setLoggedIn(true)
            console.log(loggedIn)
            setUser(loggedInUser)
            props.history.push("/Home")
          }
          else {
            alert("invalid username or password!")
          }         
        
        }
        )
        
    }


  

    console.log(user)


    // useEffect(() => {
    //   fetch("/me").then((response) => {
    //     if (response.ok) {
    //       response.json().then((user) => setUser(user));
    //       console.log(user)
    //     }
    //   });
    // }, []);

    function handleLogout() {
      fetch("http://localhost:3000/logout", {
        method: "DELETE"
      })
   
          .then(response => response.json())
          .then(loggedInUser => {
            console.log(loggedInUser) 
  
            setUser(loggedInUser )
             
            props.history.push("/")
              alert("Logged Out")
          
              
            })}

   const resetForm = () => {
      setUsername("")
      setPassword("")
    }

 
    // return (loggedIn ? <NavLink onClick={handleLogout} className="logout-button" to="./logout">Log Out</NavLink> :
    return(
    <>
    
       
        {/* <div class="login-image">  */}

        {/* <img src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="SignUp-img"/> */}
        
        {/* </div> */}
       
                <form onSubmit={(e) => handleSubmit(e)} onReset={resetForm} className="login-form"  method="post">
                {/* <div class="imgcontainer">
                      <img src="https://api.freelogodesign.org/files/32f0cf4ec5e4472bbe8c77d33669c459/thumb/logo_200x200.png?v=637685737110000000" alt="Avatar" class="avatar"/>
                </div> */}
                    {/* <div className="user-container"> */}
                            <label className="user" for="uname"><b>Username</b></label>
                            <input className="userinput" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" name="uname" required/>
                    {/* </div> */}
                    {/* <div className="password-container"> */}
                            <br></br>
                            <label className="pass" for="psw"><b>Password</b></label>
                            <input className="passinput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" name="psw" required/>

                          
                            <button className="login" type="submit"> Login</button>
                            
                            <h3 className="sign-up">Not Yet a Member?
                            <br>
                            </br>
                            <br>
                            </br>
                             <NavLink className="button-s" to="/Signup">
               Sign Up
            </NavLink></h3>

                            {/* <input type="checkbox" checked="checked" name="remember"/> Remember me</label> */}
                            
                  {/* </div> */}
            
              
                </form>
    </>  );
  }



  export default Login;