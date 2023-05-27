import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import AddNewCompanyJobForm from "./AddNewCompanyJobForm";
import Home from "./Home";
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

  function addNewCompany(newCompany){
    setCompanyData([...companyData,newCompany])
  }


  function handleNewJob(newJob){
    const companies = [...companyData]
    const i = companyData.findIndex((company) => company.id === newJob.company_id)
    const updatedJobsArray = ([...companyData[i].jobs, newJob])
    companies[i].jobs = updatedJobsArray
    setCompanyData(companies)
  }

  function handleDeleteCompany(companyId){
    setCompanyData(()=>companyData.filter((company)=>company.id !== companyId))

  }

  const companyRoutes = companyData.map((company)=>(<Route path={"/" + company.company_name} key={company.id} element={<CompanyContent company={company} handleDeleteCompany={handleDeleteCompany}/>} />))

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


