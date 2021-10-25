
import './App.css';
import { Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/currencies">
        <About />
      </Route>
      <Route path="/price">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;