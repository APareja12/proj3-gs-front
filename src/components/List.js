import { Link } from "react-router-dom";

 const List = (props) => {
    const loaded = () => {
        return (
        
            <div>  
                <ul>
                {props.films.map(film => (
                    <li key={film.id}>
                
                         <Link to={`/films/${film._id}`}>
                         <span>{film.title}</span><br />
                         </Link>  
                       
                           <span>{film.year}</span>
                    </li>   
                ))}
                </ul>
            </div>
        )
    }
    const loading = () => {
        return <h1>No Films to Display</h1>;
    }
    return props.films ? loaded() : loading(); 
}
        

export default List;