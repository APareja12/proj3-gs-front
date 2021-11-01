import { Helmet } from 'react-helmet'
import '../index.css';

const Home = (props) => {
   return (
      <>
      <Helmet>
         <title>Welcome to Golden Silence 🌟 </title>
      </Helmet>
   <h1>Search for a Silent Film </h1>
   <input id="search-input" type="text" />
   <button id="search-btn">Search</button>
   </>
   )
  }
  
  export default Home