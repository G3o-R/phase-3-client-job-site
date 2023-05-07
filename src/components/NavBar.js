import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({companies}){
    // console.log(companies)
    let companyNames = companies.map((company)=>company.company_name)
    const companyLinks = companyNames.map((companyName)=>(<NavLink to={"/" + companyName} key={companyName} className="link">{companyName}</NavLink>))
    return(
        <div className="header">
            <div className="navbar">
                <NavLink to="/" className="link">Home</NavLink>
                {companyLinks}
                <NavLink to="/create-company-job" className="link">Create Company/Job</NavLink>
            </div>
        </div>
    )
}

export default NavBar