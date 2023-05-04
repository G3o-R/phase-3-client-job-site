import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route, NavLink} from 'react-router-dom';

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
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
