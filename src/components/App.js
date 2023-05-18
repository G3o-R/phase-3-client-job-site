import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import AddNewCompanyJobForm from "./AddNewCompanyJobForm";
import Home from "./Home";

// import Companies from './Companies';
import NavBar from './NavBar';
import CompanyContent from './CompanyContent';

function App() {
  const [companyData, setCompanyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/companies")
    .then((res)=>res.json())
    .then(companyInfo=>{
      setCompanyData(companyInfo)
    })
  },[])
  // console.log(companyData)

  function addNewCompany(newCompany){
    setCompanyData([...companyData,newCompany])
  }
  // const testCompanyObj = {
  //   company_name: "Block Buster",
  //   logo_url: "null",
  //   jobs: []
  // }

  function handleNewJob(newJob){
    const companies = [...companyData]
    const i = companyData.findIndex((company) => company.id == newJob.company_id)
    const updatedJobsArray = ([...companyData[i].jobs, newJob])
    companies[i].jobs = updatedJobsArray
    setCompanyData(companies)


    /*
    this component should update the individual company
    it should update the jobs specifically I should add
    const companyJobsToUpdate = companyData.filter((company)=> company.id === newJob.company_id)
    const companyJobs = companyJobsToUpdate.jobs
    const update jobList = [...companyJobs, newJob]
    *** from here i have to update the given individual company in my companyData collection and update state
    " const updatedCompanies = something???"
    setCompanyData(updatedCompanies)
    */
  }

  const companyRoutes = companyData.map((company)=>(<Route path={"/" + company.company_name} key={company.id} element={<CompanyContent companyData={company}/>} />))

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar companyLinks={companyData}/>
        <Routes>
          <Route path="/" element={<Home companyData={companyData} />} />
          {companyRoutes}
          <Route path="/create-company-job" element={<AddNewCompanyJobForm companies={companyData} handleNewCompany={addNewCompany} handleNewJob={handleNewJob}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
