import React from "react";
import { useState } from 'react';
import './Request.css';


import 'react-dropdown/style.css';

function RequestACountry () {

const [country, setCountry]  =useState("")
const [newcountry, setNewCountry] = useState ([
    {country: "Botswana 🇧🇼"}, 
    {country: "Algeria 🇩🇿"},
    {country: "Pakistan 🇵🇰"},
    {country: "Afghanistan 🇦🇫"},
    {country: "Mali 🇲🇱"},
    {country: "Uganda 🇺🇬"},
    {country: "Taiwan 🇹🇼"},
    {country: "Chad 🇹🇩"},
    {country: "Bolivia 🇧🇴"},
    {country: "Panama 🇵🇦"},
    {country: "Haiti 🇭🇹"}

])



// function onChange(e){
//     // console.log("clicked")
//     setCountry(e.target.value)

// }

const onSubmit =(e)=>{
    e.preventDefault()
    console.log('clicked')
    setNewCountry(prev=>prev.concat({country}))
    setCountry("")
}



return(<>

    <img class="world-pic" src="https://thumbs.dreamstime.com/z/flags-world-series-illustrations-various-national-all-around-193590980.jpg" alt="world"/>
    <div class="headline">
    <div>    
    <h1> Don't See A Country You're Looking For? </h1>
    <h6> 🌍  Request A Country! 🌍</h6>
    </div>
    

    <form class="new-country" onSubmit={onSubmit} >
    <input value={country} class="country-input" onChange={e=>setCountry(e.target.value)} placeholder="Enter a Country"/> <button class="request" >Request</button>
    </form>
    {newcountry.map(eachCountry=>{
            console.log(eachCountry)
            
   

            return(<>
                <h3 class="countries">{eachCountry.country}</h3>

            </>)
        })}

</div>    

</>)

}


export default RequestACountry;