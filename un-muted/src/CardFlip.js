import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
// import Home from './components/Home';
// import YOUR_BACK_COMPONENT from "./components/YOUR_BACK_COMPONENT";
import Article from './Article';



const CardFlip = () => {
    
    const [isFlipped, setIsFlipped] = useState(false);
      
  
   const handleClick=(e)=>{
      e.preventDefault();
    console.log("clicked")
      setIsFlipped(!isFlipped);
  
   };

      return (<>


        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <Article isFlipped={isFlipped} />
            
          

  
          <div>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
      </>)
    
  }



  export default CardFlip;