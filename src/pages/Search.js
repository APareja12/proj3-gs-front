import { Helmet } from 'react-helmet'
import { useState } from 'react'
import List from '../components/List'
import '../index.css';


const Search = (props) => {
   const [search, setSearch] = useState('')
   const [filteredFilms, setFilteredFilms] = useState([])
   const [hasSearched, setHasSearched] = useState(false)
   // TODO pass a filteredList to List. Make another piece of state 
const handleSearch = (event) => {

   setHasSearched(true)
   const value = search.toLowerCase();
   console.log(value)

   const result = props.films.filter((film) => {
      if(!value) return false
      return film.title.toLowerCase().includes(value)

   })
    console.log(result)
   setFilteredFilms(result);

}


   return (
      
      <>
   <div id="home-bg">

       <Helmet>
         <title>Welcome to Golden Silence 🌟 </title>
      </Helmet>
   <h1 id="search-title">Search for a Silent Film </h1>
  
   <input id="search-input"
          type="text"
          placeholder="Search films" 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          />
   <button onClick={handleSearch} id="search-btn">Search</button>
   
   {
   filteredFilms.length && hasSearched ?
         <List films={filteredFilms}/>
      : !filteredFilms.length && hasSearched ? 
         <h2> Film Is Not In Database</h2> 
      : null
   }
   
   </div>
   </>
   )
  }
  
  export default Search