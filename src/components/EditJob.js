import "../styles/EditJob.scss"
import { useState } from "react"


function EditJob({job}){
    const [jobBody, setJobBody] = useState(job)
    console.log(jobBody)
        function handleJobChange(e){
        let name = e.target.name
        let value = e.target.value
        setJobBody({...job, [name]:value})
    }

    function handleEditJobSubmit(e){
        e.preventDefault()
        console.log(job)
    }

    // function handleDeleteJobClick(e){
    //     e.preventDefault()
    //     console.log(job.id)
    //     // fetch(`http://localhost:9292/jobs/${job.id}`,{
    //     //     method: "DELETE"
    //     // })
    //     // .then(()=> handleDeleteJob(job.id))
    //     // console.log(job.id)

    // }
    return(
        <form>
            <input className="input" type="text" name="position" value={job.description} placeholder="" onChange={handleJobChange} />
            {/* <input className="input" type="" name="" value={} placeholder="" onChange={handleJobChange} /> */}
            <input className="input" type="text" name="location" value={job.location} placeholder="" onChange={handleJobChange} />
            <input className="input" type="integer" name="pay" value={job.pay} placeholder="" onChange={handleJobChange} />
            <input className="input" type="text" name="job_description" value={job.job_description} placeholder="" onChange={handleJobChange} />
        </form>
    )
}

export default EditJob