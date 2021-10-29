import { useState } from "react";

const Show = (props) => {
  console.log(props)
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
        <form onSubmit={handleSubmit}>
          <input 
          name="title"
          onChange={handleChange}
          value={editForm.title}
          type="text" 
          />
          <input 
          name="year"
          onChange={handleChange}
          value={editForm.year}
          type="text" 
          />
          <input 
          name="director"
          onChange={handleChange}
          value={editForm.director}
          type="text" 
          />
          <input 
          name="director"
          onChange={handleChange}
          value={editForm.director}
          type="text" 
          />
          <input 
                    type="submit" 
                    value="Edit Film"/>
        </form>
      </div>
    );
    }
  
  export default Show;