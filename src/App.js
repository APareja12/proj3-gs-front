
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from './pages/About'
import Main from './components/Main'
import Favorites from './pages/Favorites'
import Nav from './components/Nav'

import Footer from './components/Footer'
import Header from './components/Header';

import Login from './pages/Login'
import Casa from './pages/Casa'
import Dashboard from './pages/Dashboard'

import { auth } from './services/firebase';


function App() {

  const [ user, setUser ] = useState(null)
  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
    return () => unsubscribe(); 
    }, []);
  

  return (
    <div className="App">
      <Header user={user}/>
      <Nav/>
      <Switch>
         <Route exact path="/">
           <Main />
         </Route>
         <Route exact path="/Casa">
           <Casa />
         </Route>
         <Route exact path="/Login">
           <Login />
         </Route> <Route exact path="/Dashboard">
           <Dashboard />
         </Route>
         <Route exact path="/About">
           <About />
         </Route>
         <Route exact path="/Favorites">
           <Favorites />
         </Route>
        </Switch>
        <Footer />
       </div>
  );
}

export default App;