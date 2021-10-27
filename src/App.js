
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Login from './pages/Login'
import Casa from './pages/Casa'
import Dashboard from './pages/Dashboard'

import { auth } from './services/firebase';

// import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
         <Route exact path="/">
           <Home />
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