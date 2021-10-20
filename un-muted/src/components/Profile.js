
import React, { useState, useEffect } from 'react';


function Profile() {



const  [user, setUser] = useState([])
const [picture, setPicture] =useState("")
const [bio, setBio] = useState("")
// const [entry, setEntry] = useState([])

// let user = props.user


useEffect(() => {    
    fetch("http://localhost:3000/profile")
    .then(response =>response.json())
    .then(fetchedusers=>{
     
        console.log(fetchedusers)
      
      
      setUser(fetchedusers)});
      console.log(user)

    }, []);

    // const newPiceUpdate=(syntheticEvent)=>{
    //    setPicture(syntheticEvent.target.value)
    // }
    // const newBioUpdate=(syntheticEvent=>{
    //     setBio(syntheticEvent.target.value)
    // })

    // const handleChange=(e)=>{
        

        
    //     console.log("HIT")
    //     e.preventDefault()
     
        
    //     fetch("/profileupdate", {
    //         method: "PATCH",
    //         headers:{'Content-Type':'application/json',
    //                 'Accept': 'application/json'
    //     },
    //         body:JSON.stringify({picture: picture, bio: bio})

    //     })
    //     console.log(picture)
    

        

    // } 

   
   
  
  return(<>


    {/* {user.map(eachUser => {
         (console.log(eachUser)) */}

      {/* return( */}
      

          
        <div class="profiles">
                    {/* <h2>{user.name}</h2>
                    <img src={user.picture} alt="Avatar"/>
                    <h3>{user.bio}</h3> */}

                    {/* <form onSubmit={handleChange} className="edit-profile">
                        
                        <input className="profilepic" type="text" value={picture} onChange={(e)=>setPicture(e.target.value)} placeholder="Update Profile Pic" name="profile" required/>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input className="profilebio" type="text" value={bio} onChange={(e)=>setBio(e.target.value)} placeholder="Edit" name="profile" required/>
                    <button  className="bio-button" type="submit"> Update</button>
            </form>         */}
               
                    </div>
            
      
      
      
            {/* )
    
        })      


    }    */}



      


</>);
    
}

export default Profile;