import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar(){
    // const links = companyNames.map((name)=>(
    //     <NavLink to={"/"+ name} className="link" key={name}>{name}</NavLink>
    // ))
    return(
        <div className="navbar">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/create-company" className="link">Start A Company</NavLink>
            <NavLink to="/create-job" className="link">Create Job</NavLink>
        </div>
    )
}

export default NavBar