import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'

const Main = (props) => { 
    const [films, setFilms] = useState([])
    const URL = "http://localhost:3001/films"
    const getFilms = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setFilms(data);
     };

     const createFilms = async (film) => {
    
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(film),
        });
        getFilms();
      };
    
      useEffect(() => getFilms(), []);
    

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home films={films} createFilms={createFilms} />
                </Route>
                {/* <Route path="/films/:id" render={(rp) => (
                    film.length ?
                        <Favorites 
                            {...rp}
                            films={films} 
                            updateFilms={updateFilms}
                            deleteFilms={deleteFilms}
                        /> */}
                    {/* :
                    <Redirect to="/" /> */}
                {/* )} /> */}
                <Route to="/404">
                    <div>
                        <h1>Page not found</h1>
                        <Link to="/">Go Back to Home Page</Link>
                    </div>
                </Route>
            </Switch>
        </main>
    );
}

export default Main;