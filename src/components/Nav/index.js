import { useContext } from "react";
import { Link } from 'react-router-dom'
//Contexts
import UserContext from '../../contexts/UserContext';


const Nav = () => {
    const user = useContext(UserContext)
    console.log('nav', user)

    //Below we will use link react router to replace all of our anchor tags. We replaced all of the href to "to" and the a tags to "link"
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* The slash in front of pokepedia indicates that it will be the landing page of our website  */}
                <Link className="navbar-brand" to="/">Pokepedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="pokemon/list">Pokemon List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="favorites">Favorites</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
