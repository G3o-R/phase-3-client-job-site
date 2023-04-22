import React from "react";

function Companies(companyData){
    // console.log((companyData))
    // is there a cleaner/better way to write this?
    // both work?
    // const companies = Object.entries(companyData)[0][1]
    const companies = Object.values(companyData)[0]
    const companiesToDisplay = companies.map((company)=>
        <div key={company.id}>
            <h1 className="companyName">{company.company_name}</h1>
            {company.jobs.map((job)=> <p key={job.id}>{job.position}</p>)}
        </div>
    )

    return(<div>
        {companiesToDisplay}

    </div>)
}

export default Companies