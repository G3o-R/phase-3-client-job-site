import "../styles/CompanyLists.scss"

function CompanyLists({companies}){
    const companyImg = companies.map((company)=>company.logo_url)

    return(<div className="company-list">
        {companyImg.map((img)=> <img src={img} className="company-logo" alt="Company logo" />)}
        
    </div>)
}

export default CompanyLists