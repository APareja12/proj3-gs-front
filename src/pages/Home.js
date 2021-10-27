import  Form  from '../components/Form'
import { Link } from "react-router-dom";
import { StyledMain } from '../styles';

const Home = (props) => {
    
    console.log(props.films)
    const loaded = () => {
        return props.films.map(film => (
            
            <div key={film._id} className="film">
                <Link to={`/films/${film._id}`}>
                    <StyledMain>
                    <h1>{film.name}</h1>
                    </StyledMain>
                </Link>
                <img src={film.image} alt={film.name} />
                <h3>{film.title}</h3>
             </div>
             
        ));
    }

    const loading = () => <h1>Loading ...</h1>
    
    
    return (
        <section>
            <Form />
            
            { props.films ? loaded() : loading() }
        </section>
    );
    
  }
  
  export default Home;