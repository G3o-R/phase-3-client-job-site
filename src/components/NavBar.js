import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({companyLinks}){
    // console.log(companyLinks)
    // let companyNames = companyLinks.map((company)=>[company.company_name, company.id])
    // ALL I NEED IS THE NAME AND MAYBE THE ID
    const links = companyLinks.map((company)=>(<NavLink to={"/" + company.company_name} key={company.id} className="link">{company.company_name}</NavLink>))
    return(
        <div className="header">
            <div className="navbar">
                <NavLink to="/" className="link">Home</NavLink>
                {links}
                <NavLink to="/create-company-job" className="link">Create Company/Job</NavLink>
            </div>
        </div>
    )
}

export default NavBar