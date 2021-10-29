import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Show = (props) => {
  
  let location = useLocation();
  console.log('this is location', location)
  const path = location.pathname
  console.log(path)
  const id = props.match.params.id;
  const films = props.films;
  
  const film = films.find(p => p._id === id);

const removeFilm = () => {
    props.deleteFilms(film._id);
    props.history.push('/');
}



    return (
      <div className="film">
        <h1>{film?.title}</h1>
        <h4>{film?.year}</h4>
        <h4>{film?.director}</h4>
        <h4>{film?.country}</h4>
        <button id="delete" onClick={removeFilm}>DELETE</button>
      </div>
    );
    }
  
  export default Show;