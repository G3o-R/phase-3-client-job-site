import "../styles/EditJob.scss"
import { useState } from "react"


function EditJob({job}){

    const [jobBody, setJobBody] = useState(job)

    function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        setJobBody({...job, [name]:value})
    }

    function handleEditJobSubmit(e){
        e.preventDefault()
        console.log(jobBody)
    }

    function handleDeleteJobClick(e){
        e.preventDefault()
        console.log(job.id)
        // fetch(`http://localhost:9292/jobs/${job.id}`,{
        //     method: "DELETE"
        // })
        // .then(()=> handleDeleteJob(job.id))
        // console.log(job.id)

    }
    return(
        <form className="edit-job" onSubmit={handleEditJobSubmit}>
            <input className="input" type="text" name="position" value={jobBody.description} placeholder="" onChange={handleJobChange} />
            {/* <input className="input" type="" name="" value={} placeholder="" onChange={handleJobChange} /> */}
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