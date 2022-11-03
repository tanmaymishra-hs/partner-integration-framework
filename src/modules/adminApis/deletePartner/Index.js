import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
let config = require("../../../config.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')

    const handleSubmit = async (event, setisLoading)=>{
        console.log(values)
        event.preventDefault();
        
        const headers = new Headers({
          'X-HS-IAuth': values["X-HS-IAuth"],
          'Content-Type': values["Content-Type"]
        })
        try{
          const response = await fetch(`http://localhost:8080/v2/partner/delete/${values["Partner Name"]}?country=${values["country"]}`, {
          method: 'DELETE',
          headers,
          mode: 'cors'
             })
             try{
              const value = await response.json()
              
              if(response.status !== 201)
              {
                setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
              }
              else{
                setResult(value)
              }
              }
              catch(error)
              {
                if (response.status === 401) {
                  const sign_in_url = response.headers.get('X-HS-IAuth-Redirect-SignIn');
                  if (sign_in_url) {
                    window.location.href = sign_in_url;
                  }
                }
                setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
              }
            }
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["deletePartner"]} title = "Delete Partner" description = "This Api helps you delete a partner from database." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
