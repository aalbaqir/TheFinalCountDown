import { useState } from 'react';

function Logout(props) {

  
  const [user, setUser] = useState(null);
//   const [ActiveUser, setUser] = useState(null);
  


function handleLogout() {
  fetch("/logout", {
    method: "DELETE"
  })

      .then(response => response.json())
      .then(loggedInUser => {
        console.log(loggedInUser) 

        setUser(loggedInUser )
         
        props.history.push("/login")
          alert("Logged Out")
      
          
        })}
 
    return (<>
        
  
  </>  )
  }



  export default Logout;