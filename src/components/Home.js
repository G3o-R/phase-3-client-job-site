import "../styles/Home.scss"
import { useNavigate } from "react-router-dom"
import JobCard from "./JobCard"

function Home({companyData}){
    const navigate = useNavigate()
    const isEmpty = companyData.length === 0 ? true : false
        const jobsToDisplay = companyData.map((company)=>(
        company.jobs.map((job)=> <JobCard job={job} company={company.company_name} key={job.id}/>)
    ))
    return(
        <div className="company-content">
            <div className="job-content">
            {isEmpty ? <h1 className="empty-content" onClick={()=>navigate("/create-company-job")}>You've gotta start a company!!!</h1>:jobsToDisplay}
            </div>
        </div>
    )
}

export default Home