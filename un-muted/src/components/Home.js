import React, { useState, useEffect } from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { useForm } from 'react-hook-form' 


// import axios from 'axios';

// import { useMemo } from "react";




function Home (props) {

  const {reset} = useForm()

  const [articlesPitStop, setArticlesPitStop] = useState([])
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
        const [comment, setComments] = useState("")
        const [newComment, setNewComment] = useState([
          {entry: "Very Interesting"},
          {entry: "Will Read Again!"}
        ])

        // setComments(props.eachArticle.comments.entry)




  

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
      setNewComment(prev=>prev.concat({entry}))
      setEntry("")
      
      
    console.log('You clicked submit.');

  // const comment = {
  //     entry
  // }

  // fetch('http://localhost:3000/enter',{
  //     method: "POST",
  //     headers:{'Content-Type':'application/json'},
  //     body:JSON.stringify(comment)
  // })

  alert("Thanks For Sharing")
  // props.history.push('/Home')
  



    }

    // useEffect(() => {
    //   fetch("http://localhost:3000/allcomments")
    //   .then(response => response.json())
    //   .then(fetchedComments =>{ console.log(fetchedComments);
      
    //   setComments(fetchedComments)

    //   console.log(comment)
    //   })
    //   comment.map(eachComment=>{
    //     console.log(eachComment)
    //   }
    //     )

    // }, [])

  

  

    // props.appToHome()

  


    const handleClick =()=>{
   
const card = document.querySelector(".card__inner");

card.addEventListener("click", function () {
  card.classList.toggle('is-flipped');
});
    }

  //  const isFlipped=(e)=>{
  //   e.preventDefault()
  //   // console.log(props.isFlipped(e))
  //   setIsFlipped(true)
     

  //  }
   
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

  const resetForm = () => {
    console.log('You clicked submit.');
    setEntry("")

   
  }
  

  // console.log(eachComment)
  
return(<>


   <div class="card">
		<div onClick={handleClick} class="card__inner">
			<div class="card__face card__face--front">
            <div className="new-thang">
                <h1>{props.eachArticle.title}</h1>
               {/* {console.log(props.eachArticle)} */}
                {<img src={props.eachArticle.urlToImage} className="pp"/>}
              <br></br>

                {/* <h3 class="written">Written By: {props.eachArticle.author}</h3>    */}
                <h3 class="description">{props.eachArticle.description} </h3>
                <h4> <a href={props.eachArticle.url}> Read More... </a></h4>
                <br>
                </br>
                <span class="likes"> <button onClick={onClick} > 👍  {like} </button>  <button onClick={onDislike}> 👎  {dislike} </button>  <button onClick={onLove}> ❤️ {heart} </button> <button onClick={onSad}> 😢 {sad} </button> </span>
                <br>
                </br>
                <br>
                </br>
                {/* <br>
                </br> */}
                <form onSubmit={handleComment}  onReset={resetForm} className="comment-form">
                  <input className="comment-input" type="text" value={entry} onChange={(e)=>setEntry(e.target.value)}  placeholder="Add Comment To This Article"/><input class="submit" type="submit"/>
                </form>
                <br>
                </br>
                {/* <h3 class="source">Source: {props.eachArticle.source.name}</h3> */}

                
            </div>
		
			</div>
			<div class="card__face card__face--back">
				<div class="card__content">
					<div class="card__header">
          <h1 class="back-title">{props.eachArticle.title}</h1>
          {<img src={props.eachArticle.urlToImage} className="pp"/>}
          
					</div>
					<div class="card__body">

						<h5>Comments</h5>

            {newComment.map(eachComment=>{
            console.log(eachComment)
            
   

            return(<>
                <h3 class="comments">{eachComment.entry}</h3>
                <h5> - UnMuted User</h5>
                <br></br>

            </>)
        })}
         
              {/* <h5> Very Intresting Article!</h5>
              <p> - Mr. Lemon </p>
      
              <h5> I read it twice!</h5>
              <p> - Trev </p> */}

             

            </div>
						{/* <p>{props.eachComment.entry}</p> */}
					
				</div>
			</div>
		</div>
	</div>
    






    </>);
}

export default Home;