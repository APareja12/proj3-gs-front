import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'
import '../index.css';

const Home = (props) => {
   const [search, setSearch] = useState('')
   const [filteredFilms, setFilteredFilms] = useState(search)
   // TODO pass a filteredList to List. Make another piece of state 
const handleSearch = (event) => {

   let value = event.target.value.toLowerCase();
   let result = [];
   console.log(value);
   result = search.filter((films) => {
      return films.title.search(value) != -1;
   })
   setFilteredFilms(result);
}

useEffect(() => {
axios('http://localhost:3001/films')
.then(response => {
   console.log(response.props.films)
   setSearch(response.props.films);
   setFilteredFilms(response.props.films);
   
})
.catch(error => {
   console.log('Error getting incorrect data: ' + error);
})
}, []);

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
          onChange={(event) => handleSearch(event.target.value)}
           />
   <button id="search-btn">Search</button>
   <List films={props.films}/>
   
   </>
   )
  }
  
  export default Home