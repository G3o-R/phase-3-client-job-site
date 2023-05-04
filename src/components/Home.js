import "../styles/Home.scss"

function Home({companyData}){
    // const jobs = companyData.map((company)=>company.jobs.map((job)=>job.position))
    // console.log(companyData.map((company)=>company.jobs.map((job)=>job)))
    const jobsToDisplay = companyData.map((company)=>(<div className="job-card">
        {company.jobs.map((job)=><>
            <h4 className="job-description">{job.position}</h4>
            <p className="company-name">{company.company_name}</p>
            <p className="location">{job.location}</p>
            <p className="job-description">{job.job_description}</p>
        </>)}
    </div>))

    return(
        <div className="home">
            <div className="job-content">
            {jobsToDisplay}
            </div>
        </div>
    )
}

export default Home