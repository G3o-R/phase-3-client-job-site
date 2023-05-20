import "../styles/CompanyContent.scss"
import JobCard from "./JobCard"

function CompanyContent({company}){
    console.log(company)
    
    /*
    is there a way to "combine" company content and home? Home takes in a collection of objects while CompanyContent takes a single object
    */
    const jobsToDisplay = 
    company.jobs.map((job)=> <JobCard job={job} company={company.company_name}/>)

return(<>
        <img src={company.logo_url} className="company-logo" alt="Company logo" />
        <div className="company-content">
            <div className="job-content">
            {jobsToDisplay}
            </div>
        </div>
    </>
    )
}

export default CompanyContent