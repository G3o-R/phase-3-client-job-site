import React ,{useState, useEffect} from "react";

const CompanyContext = React.createContext()

function CompaniesProvider({children}){
  const [companyData, setCompanyData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then((res)=>res.json())
        .then(companyInfo=>{
          setCompanyData(companyInfo)
        })
      },[])
    return <CompanyContext.Provider value={{ companyData, setCompanyData}}>{children}</CompanyContext.Provider>
}

export {CompanyContext, CompaniesProvider}