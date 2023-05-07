import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import AddNewCompanyJobForm from "./AddNewCompanyJobForm"

// import Companies from './Companies';
import NavBar from './NavBar';
import CompanyContent from './CompanyContent';

function App() {
  const [companyData, setCompanyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/companies")
    .then((res)=>res.json())
    .then(companyInfo=>setCompanyData(companyInfo))
  },[])

  const company = companyData.map((company)=>company)
  // console.log(company)
  const companyRoutes = companyData

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar companies={companyData}/>
        <Routes>
          <Route path="/" element={<CompanyContent companyData={companyData}/>} />
          {/* {companyRoutes} */}
          <Route path="/create-company-job" element={<AddNewCompanyJobForm/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
