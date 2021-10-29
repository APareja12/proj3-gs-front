import { useState } from "react";

function Favorites(props) {
  const id = props.match.params.id;
  const films = props.films;
  const film = films.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(film);

  const handleChange = event => {
    setEditForm(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }));
}

const handleSubmit = event => {
    event.preventDefault();
    const { _id, name, title, image } = editForm;
    props.updateFilms({ name, title, image }, _id);
    
}

const removeFilm = () => {
    props.deleteFilms(film._id);
    props.history.push('/');
}



    return (
      <div className="film">
        <h1>{film.title}</h1>
        <h4>{film.year}</h4>
        <h4>{film.director}</h4>
        <h4>{film.country}</h4>
        <button id="delete" onClick={removeFilm}>DELETE</button>
        <form action=""></form>
      </div>
    );
    }
  
  export default Favorites;