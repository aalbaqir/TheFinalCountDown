import React, { useState, useEffect } from 'react';
import './Home.css';


// import axios from 'axios';

// import { useMemo } from "react";



function Home (props) {
  // const [passedProp, setPassedProp] = useState({});
  // await props

  // async function handleFetchProp() {
  //   const propset = props.eachArticle
  //   if (propset) {
  //     setPassedProp(propset)
  //     console.log(props)

  //   }
  //   else {
  //     console.log("passing props")
  //   }
  // }
  // handleFetchProp()
  console.log(props)

  
        const [like, setLike] = useState(0)
        const [dislike, setDislike] = useState(0)
        const [heart, setHeart] = useState(0)
        const [sad, setSad] = useState(0)
        const [entry, setEntry] = useState("")
        const [user, setUser] = useState(null);



    //     const [news, setNews] = useState([])


    // function fetchNews() {
    //     let firstNews = fetch("https://newsapi.org/v2/top-headlines?country=za&apiKey=7b150eb4ad774c6b8b9e0ec7f8f68479");
    //     let secondNews = fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=7b150eb4ad774c6b8b9e0ec7f8f68479");
    //   // console.log(firstNews)
    //     Promise.all([firstNews, secondNews])
    //       .then(values => Promise.all(values.map(value => value.json())))
    //       .then(finalVals => {
    //         let firstNewsRes = finalVals[0].articles;
    //         let secondNewsRes = finalVals[1].articles;
    //         let newNews= secondNewsRes.concat(firstNewsRes)
    //         // console.log(newNews)
    //         setNews(newNews);
    //         // console.log(news)
    //       });
    //   }

        
    useEffect(() => {

     
      // console.log(props.eachArticle.title)

}, [])
      

    // useEffect(() => {

    //   fetchNews()
       
        
    //   }, [])

    function handleComment(e) {
      e.preventDefault();
      
      
    console.log('You clicked submit.');

  const comment = {
      entry
  }

  fetch('http://localhost:3000/enter',{
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(comment)
  })

  alert("Thanks For Sharing")
  // props.history.push('/Home')
  



    }


   const isFlipped=(e)=>{
    e.preventDefault()
    console.log(props.isFlipped(e))
    props.isFlipped(true)
     

   }
   
  //  /// for the Favorites button ///
  //    const favoritedPlantClickHandler= (se) => {
  //      console.log(se)
  //      console.log(props.eachPlant)
   
  //      props.addPlantToFavorites(props.eachPlant)
  //    }
   /// for the like button ///
  const onClick=(e)=>{
    e.preventDefault()
       console.log("clicked")
   
       setLike(like + 1);

 
    
  }


  const onDislike=(e)=>{
    e.preventDefault()
       console.log("clicked")
   
       setDislike(dislike + 1);

 
    
  }
  
  
  const onLove=(e)=>{
    e.preventDefault()
       console.log("clicked")
   
       setHeart(heart + 1);

 
    
  }


  const onSad=(e)=>{
    e.preventDefault()
       console.log("clicked")
   
       setSad(sad + 1);

 
    
  }
  
return(<>
         <div>
            <div className="blog-container">
                <h1>{props.eachArticle.title}</h1>
               {/* {console.log(props.eachArticle)} */}
                {<img src={props.eachArticle.urlToImage} className="photo"/>}
                <h3>Written By: {props.eachArticle.author}</h3>   
                <h2>{props.eachArticle.description} </h2>
               <h4> <a href={props.eachArticle.url}> Read More... </a></h4>
                <h3>Source: {props.eachArticle.source.name}</h3>
               
                <form onSubmit={handleComment} className="comment-form">
                  <input className="comment-input" type="text" value={entry} onChange={(e)=>setEntry(e.target.value)}  placeholder="Add Comment To This Article"/><input type="submit"/>
                </form>
                  <br>
            </br>

            <button onClick={isFlipped}> View Comments  </button>
            <br>
            </br>
        

        <div>

               <span> <button onClick={onClick} > 👍  {like} </button>  <button onClick={onDislike}> 👎  {dislike} </button>  <button onClick={onLove}> ❤️ {heart} </button> <button onClick={onSad}> 😢 {sad} </button> </span>
        </div>
               <br>
            </br>
            
            </div>

        
      </div>
      
    
    </>);
}

export default Home;