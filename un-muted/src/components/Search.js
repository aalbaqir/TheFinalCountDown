import './NavBar.css';
import { useState } from 'react';


const SearchBar = (props) => {
    console.log(props.eachArticle)


const  [search, setSearch] = useState("")
const  [searchedNews, setSearchedNews] = useState("")

const searchBarInput=(se)=> {
    console.log(se.target.value)
    setSearch(se.target.value)
}

const filteredSearch = () => {

    let filteredSearch 

    // if(search != ""){

    //     filteredSearch = props.eachArticle.filter( filteredNews=> filteredNews.name.toLowerCase().includes(search.toLowerCase()) == searchedNews)
    // }
     
    //     filteredSearch = props.eachArticle

    // }

    filteredSearch = props.eachArticle.filter(filteredNews =>filteredNews.name.toLowerCase().includes(search.toLowerCase()) )
}



const onSubmit=(e)=>{
    e.prevent()
}

return(<>


    <form  onSubmit={onSubmit}className="search" action="/Search" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            value={search}
            onChange={searchBarInput}
        />
        <button type="submit">Search</button>


      
    </form>


    
    
    
    <p>{filteredSearch}</p>
    
    
    



</>);


}
export default SearchBar