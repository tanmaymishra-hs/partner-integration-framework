import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
let config = require("../../../config.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event)=>{
        console.log(values)
        event.preventDefault();
        
        const headers = new Headers({
          'X-HS-IAuth': values["X-HS-IAuth"],
          'Content-Type': values["Content-Type"]
        })
        try{
          const response = await fetch(`http://localhost:8080/v2/partner/update/${values["Partner Name"]}?country=${values["country"]}`, {
          method: 'PATCH',
          body: values["RequestBody"],
          headers,
          mode: 'cors'
             })
             try{
              const value = await response.json()
              
              if(response.status !== 200)
              {
                setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
              }
              else{
                setResult(value)
              }
              }
              catch(error)
              {
                setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
              }
            }
    
        catch(error){console.error(error)}
    
      }
  return (
    <FormElement obj = {config["config"]["apis"]["updatePartner"]} title = "Update Partner" description = "This Api helps you update a partner" handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}