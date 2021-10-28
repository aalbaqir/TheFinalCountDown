// import './NavBar.css';
// import React, { useState, useEffect } from 'react';


// const SearchBar = (props) => {
//     // console.log(props.eachArticle)

//     const [news, setNews] = useState([])
//     // const  [search, setSearch] = useState("")
//     const  [searchedNews, setSearchedNews] = useState("")

//     // console.log(search)



// function fetchNews() {
        

//     let firstNews = fetch("https://newsapi.org/v2/top-headlines?country=za&apiKey=f121d4879bea404cbb5b9a4759c878ac");
//     let secondNews = fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=f121d4879bea404cbb5b9a4759c878ac");
//     // console.log(firstNews)
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


  
    

//     }
// //     console.log(news)



// //     console.log(news)


// //     console.log(fetchNews())



// function fetchNews(){



//   fetch("http://localhost:3000/news_articles")
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data);


// setNews(data)

//   })


// }








      
  
  

// // const mappedNews=()=>{
// //     news.map(eachArticle => {
// //          (console.log(eachArticle))
// //     })
// // }




// // function mappedNews()

// const searchBarInput=(se)=> {
//     console.log(se.target.value)
//     setSearchedNews(se.target.value)
    
// }



// const submitForm = (e) => {
//     e.preventDefault()
 


//     let filteredNewsSearch 
//     if (searchedNews != ""){
//         console.log(searchedNews)

//         filteredNewsSearch = news.filter( filteredNews => filteredNews.title.toLowerCase().includes(searchedNews.toLowerCase()))

//         console.log(filteredNewsSearch)

//         setNews(filteredNewsSearch)

//         props.sendingUp(filteredNewsSearch)

//         console.log(news)
//     }
    
//     else {
//         filteredNewsSearch = news
//         setNews(filteredNewsSearch)
//         props.sendingUp(news)

//     }


//     // filteredSearch = mappedNews.filter(filteredNews =>filteredNews.name.toLowerCase().includes(search.toLowerCase()) )
// // filteredSearch()



// // console.log(filteredSearch)

// // const submitForm=(e)=>{
// //     e.prevent()
// // }

// filteredNewsSearch.map(eachArticle=>{
//     console.log(eachArticle)
// })

// }


// useEffect(() => {  
//     fetchNews()
//     // submitForm()

// }, [])

// props.sendingUp()


// return(<>

// {/* {filteredNewsSearch.title} */}





//     <form onSubmit={submitForm} className="search" action="/Search" method="get">
//     <label htmlFor="header-search">
//         <span className="visually-hidden">Search blog posts</span>
//     </label>
//     <input
//         type="text"
//         id="header-search"
//         placeholder="Search blog posts"
//         name="s" 
//         value={searchedNews}
//         onChange={searchBarInput}
//     />
//     <button type="submit">Search</button>


  
// </form>

//     </>);




// }
// export default SearchBar