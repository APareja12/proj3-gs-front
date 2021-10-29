import  Form  from '../components/Form'
import { Link } from "react-router-dom";
import { StyledMain } from '../styles';
import '../index.css';

const Home = (props) => {
    console.log(props)
    const loaded = () => {

        return props.films.map(film => (
            
            <div key={film._id} className="film">
                <Link to={`/films/${film._id}`}>
                    <StyledMain>
                    <h1>{film.title}</h1>
                    </StyledMain>
                </Link>
                <h3>{film.year}</h3>
                <img style={{height: 300, width: 200 }} src={film.image} alt={film.title} />
                <p>{film.director}</p>
                <p>{film.country}</p>
                
             </div>
             
        ));
    }

    const loading = () => <h1>Loading ...</h1>
    
    
    return (
        <section>
            <Form createFilms={props.createFilms}/>

            
            { props.films ? loaded() : loading() }
        </section>
    );
    
  }
  
  export default Home;