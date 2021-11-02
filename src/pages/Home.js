import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import List from '../components/List'
import '../index.css';

const Home = (props) => {
   const [search, setSearch] = useState('')
   // TODO pass a filteredList to List. Make another piece of state 
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
   <button id="search-btn">Search</button>
   <List films={props.films}/>
   
   </>
   )
  }
  
  export default Home