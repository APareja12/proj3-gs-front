
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/About">
           <About />
         </Route>
         <Route exact path="/Favorites">
           <Favorites />
         </Route>
        </Switch>
       </div>
  );
}

export default App;