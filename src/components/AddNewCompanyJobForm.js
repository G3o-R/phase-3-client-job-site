import { useState } from "react"

function AddNewCompanyJobForm({handleNewCompany, handleNewJob, companies}){
    // console.log(companies)
    const [companyFormData, setCompanyFormData] = useState({
        company_name: "",
        logo_url: ""
    })
    const {company_name, logo_url} = companyFormData

    const [jobFormData, setJobFormData] = useState({
        position: "",
        job_description: "",
        pay: "",
        location: "",
        company_id: ""
    })
    const {position, job_description, pay, location, company_id} = jobFormData

    // const [company, setCompany] = useState(1)

    function handleCompanyChange(e){
        let name = e.target.name
        let value = e.target.value
        setCompanyFormData({...companyFormData, [name]:value})
    }

    function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        setJobFormData({...jobFormData, [name]:value})
    }

    // function setCompany(e){

    // }
    // console.log(company_id)

    let companyOptions = companies.map((company)=>(
        <option value={company.id} key={company.id}>{company.company_name}</option>
    ))

    function handleNewCompanySubmit(e){
        e.preventDefault()
        console.log(companyFormData)
    }

    function handleNewJobSubmit(e){
        e.preventDefault()
        console.log(jobFormData)
    }

    return(
    <>
    <div className="add-company">
        <form onSubmit={handleNewCompanySubmit}>
            <input type="text" name="company_name" value={company_name} placeholder="insert..." onChange={handleCompanyChange}/>
            <input type="text" name="logo_url" value={logo_url} placeholder="insert..." onChange={handleCompanyChange}/>
            <button type="submit">Add Company</button>
        </form>
    </div>
    <div className="add-job">
        <form onSubmit={handleNewJobSubmit}>
            <input type="text" name="position" value={position} placeholder="position..." onChange={handleJobChange}/>
            <input type="text" name="job_description" value={job_description} placeholder="job description..." onChange={handleJobChange}/>
            <input type="integer" name="position" value={pay} placeholder="pay..." onChange={handleJobChange}/>
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