import { useState } from "react"

function AddNewCompanyForm({handleNewCompany}){
    const [formData, setFormData] = useState({
        company_name: "",
        logo_url: ""
    })
    const {company_name, logo_url} = formData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setFormData({...formData, [name]:value})
    }

    function handleNewCompanySubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return(<div className="add-company">
        <form onSubmit={handleNewCompanySubmit}>
            <input type="text" name="company_name" value={company_name} placeholder="insert..." onChange={handleChange}/>
            <input type="text" name="logo_url" value={logo_url} placeholder="insert..." onChange={handleChange}/>
            <button type="submit">Add Company</button>
        </form>

    </div>)
}

export default AddNewCompanyForm