import "../styles/JobCard.scss"
import { useState } from "react"
import EditJob from "./EditJob"

function JobCard({job, company}){
    const [editIsOn, setEditIsOn] = useState(false)
    return(
        <div className="job-card" onDoubleClick={() => setEditIsOn((editIsOn)=>!editIsOn)}>
            {editIsOn? <EditJob job={job} setEditIsOn={setEditIsOn} editIsOn={editIsOn} /> :(<div className="content">
            <h4 className="job-position">{job.position}</h4>
            <p className="company-name">{company}</p>
            <p className="location">{job.location}</p>
            <p className="pay">${job.pay}/hr</p>
            <p className="job-description">{job.job_description}</p>
            </div>)}
        </div>
)
}

export default JobCard