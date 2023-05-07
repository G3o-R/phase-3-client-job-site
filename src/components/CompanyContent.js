import "../styles/Home.scss"

function CompanyContent({companyData}){

    const jobsToDisplay = companyData.jobs.map((job)=>
        <div className="job-card" key={job.id}>
            <div className="content">
            <h4 className="job-description">{job.position}</h4>
            <p className="company-name">{companyData.company_name}</p>
            <p className="location">{job.location}</p>
            <p className="job-description">{job.job_description}</p>
            </div>
        </div>)

    return(
        <div className="company-content">
            <div className="job-content">
            {jobsToDisplay}
            </div>
        </div>
    )
}

export default CompanyContent