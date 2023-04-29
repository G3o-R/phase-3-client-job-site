import '../styles/App.scss';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';

// import Companies from './Companies';
import Home from './Home';

function App() {
  // const [companyData, setCompanyData] = useState([])
  // useEffect(()=>{
  //   fetch("http://localhost:9292/companies")
  //   .then((res)=>res.json())
  //   .then(companyInfo=>setCompanyData(companyInfo))
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
