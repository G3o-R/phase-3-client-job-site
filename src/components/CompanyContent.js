import "../styles/CompanyContent.scss"
import JobCard from "./JobCard"
import { useNavigate } from "react-router-dom"

function CompanyContent({company, handleDeleteCompany}){
    const navigate = useNavigate()
  
    const jobsToDisplay = 
    company.jobs.map((job)=> <JobCard job={job} company={company.company_name} key={job.id}/>)

    function handleDeleteClick(){
        fetch(`http://localhost:9292/companies/${company.id}`,{
            method: "DELETE"
        })
        .then(()=>handleDeleteCompany(company.id))
        navigate('/companies')
    }

return(<>
        <img src={company.logo_url} className="company-logo" alt="Company logo" />
        <div className="company-content">
            <div className="job-content">
            {jobsToDisplay}
            <button onClick={handleDeleteClick} className="delete-btn">Delete Company?</button>
            </div>
        </div>
    </>
    )
}

export default CompanyContent