import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
import {updateUserDetailsAsync} from '../../../../utils/updateUserDetailsAsync'
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
      let secretKey = values["X-HS-SecretKey"]
      let partner_global_token = updateUserDetailsAsync(values["RequestBody"], secretKey)

      event.preventDefault();
      
      const headers = new Headers({
        'Content-Type': values["Content-Type"],
        'X-HS-AccessKey': values["X-HS-AccessKey"],
        'X-HS-Token': partner_global_token,
        'X-HS-RequestID': values["X-HS-RequestID"]
      })
      try{
       const response = await fetch(`https://partner-orchestrator-qa.pp.hotstar-labs.com/v2/partner/subscription/user/update-async`, {
        method: 'POST',
        headers,
        body: values["RequestBody"],
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
              setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
            
          }
      }          
      catch(error){console.error(error)}
      setisLoading(false)
    }
  return (
    <FormElement obj = {config["config"]["apis"]["updateUserDetailsAsync"]} title = "Update user details Async" description = "This Api helps you update user details asynchronously." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
