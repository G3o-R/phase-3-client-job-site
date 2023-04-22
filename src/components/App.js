import '../styles/App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [companyData, setCompanyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/companies")
    .then((res)=>res.json())
    .then(companyInfo=>setCompanyData(companyInfo))
  },[])

  console.log(companyData)
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
