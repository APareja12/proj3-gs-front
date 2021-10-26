import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const Main = (props) => {
    const [film, setFilm ] = useState([]); 

   
    const BASE_URL = 'https://express-people-api.herokuapp.com/people/'; 

   
    const getFilm = async () => {
        
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setFilm(data);
    }