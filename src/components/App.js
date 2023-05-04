import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

// import Companies from './Companies';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const [companyData, setCompanyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/companies")
    .then((res)=>res.json())
    .then(companyInfo=>setCompanyData(companyInfo))
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home companyData={companyData}/>} />
          {/* <Route path="/create-company" element={<AddNewCompanyForm/>} /> */}
          {/* <Route path="/create-job" element={<AddNewJobForm/>} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
