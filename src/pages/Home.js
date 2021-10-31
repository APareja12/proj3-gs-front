import { Helmet } from 'react-helmet'
import  Form  from '../components/Form'
import { Link } from "react-router-dom";
import { StyledMain } from '../styles';
import '../index.css';

const Home = (props) => {
   return (
      <>
      <Helmet>
         <title>Welcome to Golden Silence 🌟 </title>
      </Helmet>
   <h1>Search for a Silent Film </h1>
   </>
   )
  }
  
  export default Home