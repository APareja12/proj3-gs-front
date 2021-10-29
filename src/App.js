
import './App.css';
import { Route, Switch, Redirect, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import About from './pages/About'
import Main from './components/Main'
import Favorites from './pages/Favorites'
import Nav from './components/Nav'

import Footer from './components/Footer'
import Header from './components/Header';

import Login from './pages/Login'
import Casa from './pages/Casa'
import Dashboard from './pages/Dashboard'
import Show from './pages/Show'

import { auth } from './services/firebase';


function App() {

  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const fetchData = useRef(null);

  const API_URL = 'http://localhost:3001/api/contacts/';
  //TODO: add the heroku API
  
  const getContacts = async () => {
    if(user) { 
      const token = await user.getIdToken();
      console.log(token)
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    console.log(response)
    const contacts = await response.json();
    setContacts(contacts);
    }
}

  const createContact = async person => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...person, managedBy: user.uid}
    await fetch(API_URL, {
      method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(data)
   });
   getContacts();
  }

  useEffect(() => {
    fetchData.current = createContact;
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setContacts([]);
      }
      
    });
   
    return () => unsubscribe(); 
    }, [user]);
  

  return (
    <div className="App">
      <Header user={user}/>
      <Nav/>
      {
      user
        ? <Switch>
         <Route exact path="/">
           <Main user={user}/>
         </Route>
         <Route path="/:id" render={(rp) => (

           <Show
          {...rp} user={user}/>
         )} />

         <Route exact path="/Casa">
           <Casa />
         </Route>
         <Route exact path="/Login">
           <Login />
         </Route> <Route path="/Dashboard">
            
            <Dashboard 
              contacts={contacts}
              createContact={createContact}
               />
         </Route>
         <Route exact path="/About">
           <About />
         </Route>
         <Route exact path="/Favorites">
           <Favorites />
         </Route>
             </Switch>
          : <Switch>
    <Route exact path="/">
    <Main user= {user}/>
    </Route>
    <Route exact path="/Login">
    <Login />
  </Route>
  </Switch>
    }
        <Footer />
       </div>
  );
}

export default App;