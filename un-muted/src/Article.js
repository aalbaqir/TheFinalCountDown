
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import SearchBar from './components/Search';

function Article(props){

const [news, setNews] = useState([])
// const [loading, setLoading] = useState(false);
// console.log(news)




 function fetchNews() {
        

        let firstNews = fetch("https://newsapi.org/v2/top-headlines?country=za&apiKey=b500b37d628240f094166bda8e2edd9a");
        let secondNews = fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=b500b37d628240f094166bda8e2edd9a");
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
        // console.log(news)

useEffect(() => {        
        fetchNews()


}, [])



  

    

   




    return(<>


        {news.map(eachArticle => {
            //  (console.log(eachArticle))

          return(<>
                    <SearchBar eachArticle={eachArticle}/>

                      
                    <Home eachArticle={eachArticle} isFlipped={props.isFlipped}/>
          
                  
          
          
               </> )
        
            })      
    
    
        }     


    </>);
      


}



export default Article;