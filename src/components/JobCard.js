import "../styles/JobCard.scss"

function JobCard({job, company}){
    return(
        <div className="job-card">
            <div className="content">
            <h4 className="job-description">{job.position}</h4>
            <p className="company-name">{company}</p>
            <p className="location">{job.location}</p>
            <p className="job-description">{job.job_description}</p>
            </div>
        </div>
        )
}

export default JobCard