import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div className="header">
            <div className="navbar">
                <NavLink to="/home" className="link">Home</NavLink>
                <NavLink to={"/companies"} className="link">Company Lists</NavLink>
                <NavLink to="/create-company-job" className="link">Create Company/Job</NavLink>
            </div>
        </div>
    )
}

export default NavBar