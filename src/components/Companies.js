import React from "react";

function Companies(companyData){
    // console.log((companyData))

    const data = Object.entries(companyData)[0][1]
    // console.log(data)
    
    data.map((company)=>{
        console.log(company.company_name)
    })
    return(<div>
        {data.map((company)=> <h1 key={company.id}>{company.company_name}</h1>)}

    </div>)
}

export default Companies