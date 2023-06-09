import '../styles/App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import CompanyLists from './CompanyLists';
import AddNewCompanyJobForm from "./AddNewCompanyJobForm";
import Home from "./Home";
import NavBar from './NavBar';
import { useContext } from 'react';
import { CompanyContext } from './Context/companies';
import CompanyContent from "./CompanyContent"

function App() {
  const {companyData, setCompanyData} = useContext(CompanyContext)
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

  const companyRoutes = companyData.map((company)=>(<Route path={`${company.id}`} key={company.id} element={<CompanyContent company={company} handleDeleteCompany={handleDeleteCompany}/>} />))
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar companyLinks={companyData}/>
        <Routes>
          <Route path="home" element={<Home companyData={companyData} handleDeleteCompany={handleDeleteCompany}/>} />
          <Route path="companies" >
            <Route index={true} element ={<CompanyLists companies={companyData}/>} />
            {companyRoutes}
          </Route>
          {companyData.length > 0 || companyData === [] ? <Route path="create-company-job" element={<AddNewCompanyJobForm companies={companyData} handleNewCompany={addNewCompany} handleNewJob={handleNewJob}/>} /> : null}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


