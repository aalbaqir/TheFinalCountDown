
import React, { useState, useEffect } from 'react';
import Home from './components/Home';

function Article(props){

const [news, setNews] = useState([])
const   [searchedNews, setSearchedNews] = useState("")


console.log(props)


console.log(props.articlesPitStop)

 function fetchNews() {
        

        let firstNews = fetch("https://newsapi.org/v2/top-headlines?country=za&apiKey=a94a669ef32e481da9d3a5e9ac2cdd71");
        let secondNews = fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=a94a669ef32e481da9d3a5e9ac2cdd71");
        // console.log(firstNews)
        Promise.all([firstNews, secondNews])
          .then(values => Promise.all(values.map(value => value.json())))
          .then(finalVals => {
            let firstNewsRes = finalVals[0].articles;
            let secondNewsRes = finalVals[1].articles;
            let newNews= secondNewsRes.concat(firstNewsRes)
            // console.log(newNews)
            setNews(newNews);
            // console.log(news)
          });
        
    
        }


// function fetchNews(){



//   fetch("http://localhost:3000/news_articles")
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data[0].comments);


// setNews(data)

//   })


// }
console.log(news)

useEffect(() => {        
  fetchNews()


}, [])



const searchBarInput=(e)=> {
  console.log(e.target.value)
  setSearchedNews(e.target.value)
  // e.target.reset();


}



const submitForm = (e) => {
  e.preventDefault()
  e.target.reset()




  let filteredNewsSearch 
  if (searchedNews != ""){
      console.log(searchedNews)

      filteredNewsSearch = news.filter( filteredNews => filteredNews.title.toLowerCase().includes(searchedNews.toLowerCase()))

      console.log(filteredNewsSearch)

      setNews(filteredNewsSearch)

      // props.sendingUp(filteredNewsSearch)

      console.log(news)
  }
  
  else {
      filteredNewsSearch = news
      setNews(filteredNewsSearch)
      // props.sendingUp(news)

  }


filteredNewsSearch.map(eachArticle=>{
  console.log(eachArticle)
})

}

const resetForm = () => {
  console.log('You clicked submit.');
  setSearchedNews("")

 
}

    // props.appToHome()


    return(<>
      <form onSubmit={submitForm} onReset={resetForm} className="search-form" action="/Search" method="get">
          <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
          </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s" 
                value={searchedNews}
                onChange={searchBarInput}
                 
                />
          <button class="search" type="submit">Search</button>
      </form>



        {news.map(eachArticle => {
                  {/* {props.articlesPitStop.map(eachArticle => { */}
                  {/* {t.map(eachArticle => { */}


            //  (console.log(eachArticle))

          return(<>
                    {/* <SearchBar eachArticle={eachArticle}/> */}

                      
                    <Home eachArticle={eachArticle} isFlipped={props.isFlipped} appToHome={props.appToHome}/>
          
                  
          
          
               </> )
        
            })      
    
    
        }     


    </>);
      


}



export default Article;