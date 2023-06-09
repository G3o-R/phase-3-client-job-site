import "../styles/CompanyLists.scss"
import { Link } from "react-router-dom"

function CompanyLists({companies}){
    const company = companies.map((company)=>[company.logo_url, company.id])

    return(<div className="company-list">
        {company.map((company)=> <Link to={`/companies/${company[1]}`} key={company[1]}><img src={company[0]} className="company-logo" alt="Company logo" /></Link>)}
    </div>)
}

export default CompanyLists