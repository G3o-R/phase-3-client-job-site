import React from "react";
import "../styles/Companies.scss"

function Companies({companyData}){
    console.log((companyData))
    // is there a cleaner/better way to write this?
    // both work?
    // const companies = Object.entries(companyData)[0][1]
    // const companies = Object.values(companyData)[0]
    // console.log(companyData)
    const companiesToDisplay = companyData.map((company)=>
    // console.log(company.jobs)
    // <>
        <div className="company-card">
                <img src={company.logo_url} alt="company logo" className="logo-image"/>
        </div>
    //     {/* <h1>{company.jobs}</h1> */}
    // </>
    )
    // debugger
    return(<div className="content">
        <div className="company-grid">
        {companiesToDisplay}

        </div>
    </div>)
}

export default Companies