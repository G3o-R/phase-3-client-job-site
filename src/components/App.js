import '../styles/App.scss';
import { useState, useEffect } from 'react';

import Companies from './Companies';

function App() {
  const [companyData, setCompanyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/companies")
    .then((res)=>res.json())
    .then(companyInfo=>setCompanyData(companyInfo))
  },[])

  return (
    <div className="App">
      <Companies companyData={companyData}/>
    </div>
  );
}

export default App;
