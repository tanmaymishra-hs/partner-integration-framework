import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
        
     event.preventDefault();
      const headers = new Headers({
        'Content-Type': values["Content-Type"],
        'X-HS-AccessKey': values["X-HS-AccessKey"],
        'X-HS-RequestID': values["X-HS-RequestID"]
      })
      try{
       const response = await fetch(`http://localhost:8080/v2/partner/subscription/update-details/${values["PartnerSubscriptionId"]}`, {
        method: 'PATCH',
        headers,
        body: values["RequestBody"],
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
      setisLoading(false)
    }
  return (
    <FormElement obj = {config["config"]["apis"]["updateSubscriptionDetails"]} title = "Update Subscription Details" description = "This Api helps you update Subscription details." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
