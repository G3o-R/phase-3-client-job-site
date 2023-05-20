import "../styles/Home.scss"
import JobCard from "./JobCard"

function Home({companyData}){
        const jobsToDisplay = companyData.map((company)=>(
        company.jobs.map((job)=> <JobCard job={job} company={company.company_name} key={job.id}/>)
    ))
    return(
        <div className="company-content">
            <div className="job-content">
            {jobsToDisplay}
            </div>
        </div>
    )
}

export default Home