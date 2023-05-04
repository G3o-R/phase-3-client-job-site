import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div className="header">
            <div className="navbar">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/create-company" className="link">Start A Company</NavLink>
                <NavLink to="/create-job" className="link">Create Job</NavLink>
            </div>
        </div>
    )
}

export default NavBar