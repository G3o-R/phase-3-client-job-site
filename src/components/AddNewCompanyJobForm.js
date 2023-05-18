import { useState } from "react"
import "../styles/AddNewCompanyJobForm.scss"

function AddNewCompanyJobForm({companies, handleNewCompany, handleNewJob}){
    // debugger
    const [companyFormData, setCompanyFormData] = useState({
        company_name: "",
        logo_url: ""
    })
    const {company_name, logo_url} = companyFormData

    function handleCompanyChange(e){
        let name = e.target.name
        let value = e.target.value
        setCompanyFormData({...companyFormData, [name]:value})
    }

    const [jobFormData, setJobFormData] = useState({
        position: "",
        job_description: "",
        pay: "",
        location: "",
        company_id: 3
    })

    const {position, job_description, pay, location, company_id} = jobFormData


    function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        console.log(jobFormData)
        setJobFormData({...jobFormData, [name]:value})
    }

    let companyOptions = companies.map((company)=>(
        <option value={company.id} key={company.id}>{company.company_name}</option>
    ))
// why do I get a 500 server error when I post?
// SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    function handleNewCompanySubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/companies",{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(companyFormData)
        })
        .then(res=>res.json())
        .then((newCompany)=>handleNewCompany(newCompany))
        // console.log(newCompany)
        setCompanyFormData({
            company_name: "",
            logo_url: ""
        })
    }



    function handleNewJobSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/jobs",{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(jobFormData)
        })
        .then(res=>res.json())
        .then((newJob)=>handleNewJob(newJob))
        // setJobFormData({
        //     position: "",
        //     job_description: "",
        //     pay: "",
        //     location: "",
        //     company_id: ""
        // })
        // handleNewJob(jobFormData)
    }

    return(
    <>
    <h1 className="form-header">Start a company!</h1>
    <div className="add-company">
        <form onSubmit={handleNewCompanySubmit}>
            <input type="text" name="company_name" value={company_name} placeholder="company name..." onChange={handleCompanyChange}/>
            <input type="text" name="logo_url" value={logo_url} placeholder="logo..." onChange={handleCompanyChange}/>
            <button type="submit">Add Company</button>
        </form>
    </div>
    <h1 className="form-header">Create a Job!</h1>
    <div className="add-job">
        <form onSubmit={handleNewJobSubmit}>
            <input type="text" name="position" value={position} placeholder="position..." onChange={handleJobChange}/>
            <input type="text" name="job_description" value={job_description} placeholder="job description..." onChange={handleJobChange}/>
            <input type="integer" name="pay" value={pay} placeholder="pay..." onChange={handleJobChange}/>
            <input type="text" name="location" value={location} placeholder="location..." onChange={handleJobChange}/>
            <select type="integer" name="company_id" value={company_id} onChange={handleJobChange}>
                {companyOptions}
            </select>
            <button type="submit">Create Job</button>
        </form>
    </div>
    </>)
}

export default AddNewCompanyJobForm