import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({companies}){
    // console.log(companies)
    let companyNames = companies.map((company)=>company.company_name)
    console.log(companyNames)
    const companyLinks = companyNames.map((companyName)=>(<NavLink to={"/" + companyName} className="link">{companyName}</NavLink>))
    return(
        <div className="header">
            <div className="navbar">
                <NavLink to="/" className="link">Home</NavLink>
                {companyLinks}
                <NavLink to="/create-company-job" className="link">Start A Company</NavLink>
            </div>
        </div>
    )
}

export default NavBar