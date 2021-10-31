import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div className="nav">
            <Link to= '/'>
            <div>Home</div>
            </Link> 
            <Link to="/About">
            <div>About</div>
            </Link> 
            <Link to="/Add">
            <div>Add a Film</div>
            </Link>   
            <Link to="/Favorites">
            <div>Favorites</div>
            </Link>    

        </div>
    );
}

export default Nav;