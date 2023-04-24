import React from "react";
import "../styles/Companies.scss"

function Companies(companyData){
    // console.log((companyData))
    // is there a cleaner/better way to write this?
    // both work?
    // const companies = Object.entries(companyData)[0][1]
    const companies = Object.values(companyData)[0]
    const companiesToDisplay = companies.map((company)=>
    // console.log(company.logo_url)
        <div className="company-card">
                {/* display companies here */}
                <img src={company.logo_url} alt="company logo" className="logo-image"/>

        </div>
    )

    return(<div className="company-grid">
        {companiesToDisplay}

    </div>)
}

export default Companies