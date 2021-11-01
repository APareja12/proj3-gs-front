import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import { StyledMain } from '../styles';
import '../index.css';

const Home = (props) => {
   
   let resultsList;
   const buttonEl = document.getElementById('search-btn');
   const inputEl = document.getElementById('search-input');
   const resultsEl = document.getElementById('results');

   buttonEl.addEventListener('click', handleClick);
   inputEl.addEventListener('focus', handleReset);

   function handleReset() {
      resultsEl.innerHTML = "";
  }

  function handleClick() {
   const userInput = inputEl.value;
   if(!userInput) return; 
   fetch('/films/search?title=' + userInput)
   .then(response => response.json())
   .then(data => {
       resultsList = data;
       inputEl.value = ""
       render();
   });
}


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