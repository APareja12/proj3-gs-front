import { useState } from "react";

function Favorites(props) {
  const id = props.match.params.id;
  const films = props.films;
  const film = films.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(film);



    return <h1>Favorites</h1>;
  }
  
  export default Favorites;