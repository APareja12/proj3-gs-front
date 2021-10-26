import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const Main = (props) => { 
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index films={films} createFilms={createFilms} />
                </Route>
                <Route path="/films/:id" render={(rp) => (
                    film.length ?
                        <Show 
                            {...rp}
                            films={films} 
                            updateFilms={updateFilms}
                            deleteFilms={deleteFilms}
                        />
                    :
                    <Redirect to="/" />
                )} />
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