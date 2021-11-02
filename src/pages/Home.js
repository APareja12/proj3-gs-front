import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
// import List from '../components/List'
import '../index.css';

const Home = () => {
   const [search, setSearch] = useState('')
   
   return (
      
      <>

       <Helmet>
         <title>Welcome to Golden Silence 🌟 </title>
      </Helmet>
   <h1>Search for a Silent Film </h1>
  
   <input id="search-input"
          type="text"
          placeholder="Search name" 
          value=''
          onChange={(event) => setSearch(event.target.value)}
           />
   <button id="search-btn">Search</button>
   
   </>
   )
  }
  
  export default Home