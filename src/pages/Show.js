import { useState } from "react";

const Show = (props) => {
  console.log(props)
  const id = props.match.params.id;
  const films = props.films;
  
  const film = films.find(p => p._id === id);


const removeFilm = () => {
    console.log(film._id, film.id)
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