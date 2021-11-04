import { Link } from "react-router-dom";

 const List = (props) => {
    const loaded = () => {
        return (
        
            <div className="list-style">  
                <ul>
                {props.films.map(film => (
                    <li key={film.id}>
                
                         <Link to={`/films/${film._id}`} style={{ textDecoration: 'none' }}>
                         <span>{film.title}</span><br />
                         </Link>  
                       
                           <span>{film.year}</span><br />
                           <span>
                               <img style={{height: 289, width: 200 }} 
                           src={film.image} alt={film.title} />
                           </span>
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