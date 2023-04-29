import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <>
        <NavLink to="/testing" className="link">Testing</NavLink>
        
        </>
    )
}

export default NavBar