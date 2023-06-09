import React ,{useState} from "react";

const CompanyContext = React.createContext()

function CompaniesProvider({children}){
  const [companyData, setCompanyData] = useState([])
    return <CompanyContext.Provider value={{ companyData, setCompanyData}}>{children}</CompanyContext.Provider>
}

export {CompanyContext, CompaniesProvider}