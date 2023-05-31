import "../styles/EditJob.scss"
import { useState, useContext } from "react"
import { CompanyContext } from "./Context/companies"


function EditJob({job, setEditIsOn, editIsOn}){
    const {companyData, setCompanyData} = useContext(CompanyContext)

    const [jobBody, setJobBody] = useState({
        position: job.position,
        job_description: job.job_description,
        pay: job.pay,
        location: job.location,
        company_id: job.company_id
    })

    const {position, job_description, pay, location, company_id} = jobBody

    function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        setJobBody({...jobBody, [name]:value})
        // console.log(jobBody)
    }
    
    function deleteJob(deleteJob){
        const companyDataToUpdate = [...companyData]
        const company = companyDataToUpdate.find((company)=>company.id === deleteJob.company_id)
        company.jobs = company.jobs.filter((job)=>job.id !== deleteJob.id)        
        setCompanyData(companyDataToUpdate)
    }

    function handleDeleteJobClick(e){
        e.preventDefault()
        fetch(`http://localhost:9292/jobs/${job.id}`,{
            method: "DELETE"
        })
        .then(()=> deleteJob(job))
        
    }

    function handleUpdate(updatedJob){
        // console.log(updatedJob)
        const companyDataToUpdate = [...companyData]
        const company = companyDataToUpdate.find((company)=>company.id === updatedJob.company_id)
        if (job.company_id === updatedJob.company_id){
            const i = company.jobs.findIndex((job)=>job.id === updatedJob.id)
            company.jobs[i] = updatedJob
            console.log(companyDataToUpdate)
            setCompanyData(companyDataToUpdate)
        } else{
            company.jobs = [...company.jobs, updatedJob]
            setCompanyData(companyDataToUpdate)
            deleteJob(job)
            // debugger
        }
    }

    function handleEditJobSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/jobs/${job.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobBody)
        })
        .then((res)=>res.json())
        .then((updatedJob)=>handleUpdate(updatedJob))
        setEditIsOn(!editIsOn)
    }

    const companySelectOptions = companyData.map((company)=>[company.company_name,company.id])
    // debugger
    return(
        <form className="edit-job" onSubmit={handleEditJobSubmit}>
            <input className="input" type="text" name="position" value={position} placeholder="" onChange={handleJobChange} />
            <select type="number" name="company_id" value={company_id} onChange={handleJobChange}>
                {companySelectOptions.map((company)=><option name="company_id" value={company[1]} key={company[1]}>{company[0]}</option>)}
            </select>
            <input className="input" type="text" name="location" value={location} placeholder="" onChange={handleJobChange} />
            <input className="input" type="number" name="pay" value={pay} placeholder="" onChange={handleJobChange} />
            <input className="input" type="text" name="job_description" value={job_description} placeholder="" onChange={handleJobChange} />
            <div className="edit-btns">
            <button type="submit">edit job</button> <button type="click" onClick={handleDeleteJobClick}>delete</button>
            </div>
        </form>
    )
}

export default EditJob