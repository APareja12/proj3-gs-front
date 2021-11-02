import { Helmet } from 'react-helmet'
import { useState } from 'react'
import List from '../components/List'
import '../index.css';

const Home = (props) => {
   const [search, setSearch] = useState('')
   const [filteredFilms, setFilteredFilms] = useState([])
   // TODO pass a filteredList to List. Make another piece of state 
const handleSearch = (event) => {

   const value = search.toLowerCase();


   const result = props.films.filter((film) => {
   
      return film.title.toLowerCase().includes(value)
   })
   setFilteredFilms(result);
}


   return (
      
      <>

       <Helmet>
         <title>Welcome to Golden Silence 🌟 </title>
      </Helmet>
   <h1>Search for a Silent Film </h1>
  
   <input id="search-input"
          type="text"
          placeholder="Search films" 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
           />
   <button onClick={handleSearch} id="search-btn">Search</button>
   <List films={filteredFilms}/>
   
   </>
   )
  }
  
  export default Home