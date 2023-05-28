import "../styles/EditJob.scss"
import { useState, useContext } from "react"
import { CompanyContext } from "./Context/companies"


function EditJob({job}){
    const {companyData, setCompanyData} = useContext(CompanyContext)
    // console.log(companyData.map((company)=>company.company_name))

    const [jobBody, setJobBody] = useState(job)

    function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        setJobBody({...job, [name]:value})
    }
    console.log(job)

    function handleEditJobSubmit(e){
        e.preventDefault()
        // console.log(jobBody)
    }

    function deleteJob(deleteJob){
        // debugger
        const companyDataToUpdate = [...companyData]
        const companyJobs = companyDataToUpdate.find((company)=>company.id === deleteJob.company_id)
        const jobToDelete = companyJobs.jobs.filter((job)=>job.id !== deleteJob.id)
        const updatedCompanyJobsArray = (companyJobs.jobs = jobToDelete)
        companyDataToUpdate[deleteJob.company_id].jobs = (companyDataToUpdate[deleteJob.company_id].jobs = updatedCompanyJobsArray)  
        
        setCompanyData(companyDataToUpdate)
    }

    function handleDeleteJobClick(){
        fetch(`http://localhost:9292/jobs/${job.id}`,{
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(()=> deleteJob(job))
        // deleteJob(job)
        // console.log(job.id)

    }

    const companySelectOptions = companyData.map((company)=>[company.company_name,company.id])
    // debugger
    return(
        <form className="edit-job" onSubmit={handleEditJobSubmit}>
            <input className="input" type="text" name="position" value={jobBody.position} placeholder="" onChange={handleJobChange} />
            <select type="number" name="company_id" value={jobBody.company_id} onChange={handleJobChange}>
                {companySelectOptions.map((company)=><option name="company_id" value={company[1]} key={company[1]}>{company[0]}</option>)}
            </select>
            <input className="input" type="text" name="location" value={jobBody.location} placeholder="" onChange={handleJobChange} />
            <input className="input" type="number" name="pay" value={jobBody.pay} placeholder="" onChange={handleJobChange} />
            <input className="input" type="text" name="job_description" value={jobBody.job_description} placeholder="" onChange={handleJobChange} />
            <div className="edit-btns">
            <button type="submit">edit job</button> <button type="click" onClick={handleDeleteJobClick}>delete</button>
            </div>
        </form>
    )
}

export default EditJob