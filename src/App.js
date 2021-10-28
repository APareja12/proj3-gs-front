
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

  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const API_URL = 'http://localhost:3001/api/contacts';
  //TODO: add the heroku API
  const getContacts = async () => {
    const response = await fetch(API_URL);
    const contacts = response.json();
    setContacts(contacts);
  }

  const createContact = async person => {
    const response = await fetch(API_URL, {
      method: 'POST',
    headers: {'Content-type': 'Application/json'},
    body: JSON.stringify(person)
   });
   getContacts();
  }

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
    getContacts();
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