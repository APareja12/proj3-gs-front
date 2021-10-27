import  Form  from '../components/Form'
import { Link } from "react-router-dom";

const Home = (props) => {
    
    const loaded = () => {
        
        return props.films.map(film => (
            <div key={film._id} className="film">
                <Link to={`/films/${film._id}`}>
                    <h1>{film.name}</h1>
                </Link>
                <img src="film.image" alt="film.name" />
                <h3>{film.title}</h3>
             </div>
        ));
    }

    const loading = () => <h1>Loading ...</h1>
 
    return (
        <section>
            <Form />
            { props.people ? loaded() : loading() }
        </section>
    );
    
  }
  
  export default Home;