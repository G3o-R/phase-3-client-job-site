import "../styles/Home.scss"

function CompanyContent({companyData}){

    /*
    is there a way to "combine" company content and home? Home takes in a collection of objects while CompanyContent takes a single object
    */

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
            <img src={companyData.logo_url} className="company-logo" alt="Company logo" />
            <div className="job-content">
            {jobsToDisplay}
            </div>
        </div>
    )
}

export default CompanyContent