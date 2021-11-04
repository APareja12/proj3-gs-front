
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import About from './pages/About'
import Favorites from './pages/Favorites'
import Nav from './components/Nav'

import Footer from './components/Footer'
import Header from './components/Header'

import Login from './pages/Login'
import Casa from './pages/Casa'
import Dashboard from './pages/Dashboard'
import Show from './pages/Show'
import Search from './pages/Search'
import Add from './pages/Add'
import Welcome from './pages/Welcome'

import { auth } from './services/firebase'


function App() {
 
  const [films, setFilms] = useState([]);
  console.log(films)

  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const fetchData = useRef(null);

  // const URL = "http://localhost:3001/films/" 

  const URL = "https://golden-silence-api.herokuapp.com/films/"


  const getFilms = async () => {
      
      if (user !== null) {
          const token = await user.getIdToken();
          const response = await fetch(URL, {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + token
              }
            })
          const data = await response.json();
          console.log(data, 'getFilms')
          setFilms(data);
      }
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

    const updateFilms = async (film, id) => {
        await fetch(URL + id,  {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(film)
        });
        getFilms();
    }
  
    const deleteFilms = async id => {
        await fetch(URL + id, {method: 'DELETE'});
        getFilms();
    }

    useEffect(() => {
      getFilms()
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    

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
                <Welcome/>

            </Route>
            <Route exact path="/Search">
                <Search user={user} films={films}/>
            </Route>
            <Route exact path="/Casa">
                 <Casa />
            </Route>
            <Route exact path="/Login">
           <Login />
            </Route>
           <Route path="/Dashboard">
                <Dashboard 
                  contacts={contacts}
                  createContact={createContact}
               />
           </Route>
         <Route exact path="/About">
           <About />
         </Route>
         <Route exact path="/Add">
           <Add user={user} films={films} createFilms={createFilms} />
         </Route>
         <Route exact path="/Favorites">
                <Favorites />
         </Route>
         <Route path="/films/:id" render={(rp) => (
                <Show
                {...rp} user={user}
                films={films} 
                updateFilms={updateFilms}
                deleteFilms={deleteFilms} />
                )} />
          </Switch>
          : <Switch>
        <Route exact path="/">
          <Welcome user= {user}/>
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