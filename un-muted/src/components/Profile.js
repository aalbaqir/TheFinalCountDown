import './Profile.css';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'



function Profile(props) {
    // console.log(props.user)

// This is someone's personal vibe page that features content that the like
// Ideally the page will be split into columns. There can also be a journal-like
// feature where the person writes about their day, dreams, or aspiration.
// Instead of of two columns, this would be better as a toggle feature,
// so users can toggle between their journal and their wall.

const [profiles, setProfiles] = useState ([])
const [picture, setPicture] =useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [country, setCountry] = useState("")

const [user, setUser] = useState(null);
const [edit, setEdit] =useState(false)

// console.log(localStorage)
// const [entry, setEntry] = useState([])

// let user = props.user

// useEffect(() => {
//     fetch("http://localhost:3000/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//         console.log(user)
//       }
//     });
//   }, []);


// useEffect(() => {    
//     fetch("http://localhost:3000/me")
//     .then(response =>response.json())
//     .then(fetchedusers=>{
     
//         console.log(fetchedusers)
      
      
//       setProfile(fetchedusers)});
//       console.log(profile)

//     }, []);

    const newPiceUpdate=(syntheticEvent)=>{
        console.log("I'm changing")
       setPicture(syntheticEvent.target.value)
    }
    const newNameUpdate=(syntheticEvent=>{
        setName(syntheticEvent.target.value)
    })
    const newEmailUpdate=(syntheticEvent=>{
        setEmail(syntheticEvent.target.value)
    })
    const newCountryUpdate=(syntheticEvent=>{
        setCountry(syntheticEvent.target.value)
    })

    const handleChange=(e)=>{
        console.log("clicked")

        const profile = {
            picture: picture,
            name: name,
            email: email,
            country: country

        }

        
        console.log("HIT")
        e.preventDefault()
     

        console.log(name)
        fetch("http://localhost:3000/profileupdate", {
            method: "PATCH",
            headers:{'Content-Type':'application/json',
                    'Accept': 'application/json'
        },
            body:JSON.stringify({profile})

            
        })
        console.log(picture)
       
        setEmail(email)
        setName(name)
        setCountry(country)
        setPicture(picture) 

        

    }  

    function handleLogout() {
        fetch("http://localhost:3000/logout", {
          method: "DELETE"
        })
     
            .then(response => response.json())
            .then(loggedInUser => {
              console.log(loggedInUser) 
    
              setUser(loggedInUser)
               
              props.history.push("/")
                alert("Logged Out")
            
                
              })}
    
    

        // journal=journal

return( localStorage.user_name ? <div>
    {/* <div class="home-image"> 

<img src="https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="home-img"/>
</div> */}
<NavLink onClick={handleLogout} className="logout-button" to="./logout">  Log Out  </NavLink> 

                    <div class="profile">
                    <h1> Welcome, {localStorage.name}</h1>
                    <img class="avatar" src={localStorage.picture} alt="Avatar"/>
                    <h2> Name: {localStorage.user_name} </h2>
                    <h2>Email: {localStorage.email}</h2>
                    <h2> Country: {localStorage.country}</h2>
                    <h2>Member Since: {localStorage.member_since}</h2>
                        <br>
                        </br>
                 
                 <button onClick={()=>setEdit(true)} className="edit"> Edit Profile </button>    
                 </div>
                 <div> 
              {edit ? <form onSubmit={handleChange} className="edit-profile">
                       
                        <input className="profilepic" type="text" value={picture} onChange={newPiceUpdate} placeholder="Update Profile Pic" name="profile" required/>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input className="profilename" type="text" value={name} onChange={newNameUpdate} placeholder="Name" name="Update Name" required/>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input className="profileemail" type="text" value={email} onChange={newEmailUpdate} placeholder="Email" name="Update Email" required/>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input className="profilecountry" type="text" value={country} onChange={newCountryUpdate} placeholder="Country" name="Update Country" required/>
                    <button onClick={()=>setEdit(false)} className="bio-button" type="submit"> Update</button>
            </form> : null}  
                         
               
                </div>

                
           
        
        
   
    </div> : <h4>You're not authorized to view this page</h4>)
    
}

export default Profile;