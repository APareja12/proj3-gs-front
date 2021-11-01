import { useState } from "react";

const Show = (props) => {
  
  const id = props.match.params.id;
  const films = props.films;
  
  const film = films.find(p => p._id === id);

const [ editForm, setEditForm ] = useState(film)

const handleChange = event => {
  setEditForm(prevState => ({
    ...prevState,
    [event.target.title]: event.target.value
  }));
}

const handleSubmit = event => {
  event.preventDefault();
  const {_id, title, year, image, director, country} = editForm;
   props.updateFilms({title, year, image, director, country}, _id);
}

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
        <form onSubmit={handleSubmit}>
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={editForm.title} 
                    type="text" 
                />
                <br />
                <input 
                    name="year" 
                    onChange={handleChange} 
                    value={editForm.year} 
                    type="text" 
                />
                <br />
                <input 
                    name="image" 
                    onChange={handleChange} 
                    value={editForm.image} 
                    type="url" 
                />
                <br />
                <input 
                    name="director" 
                    onChange={handleChange} 
                    value={editForm.director} 
                    type="url" 
                />
                <br />
                <input 
                    name="country" 
                    onChange={handleChange} 
                    value={editForm.country} 
                    type="url" 
                />
                <br />
                <input 
                    type="submit" 
                    value="Edit Film"/>
                    <br />
            </form>
      </div>
    );
    }
  
  export default Show;