import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
import {createGuestSubsAsync} from '../../../../utils/CreateGuestSubsAsync'
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
      let secretKey = values["X-HS-SecretKey"]
      let partner_global_token = createGuestSubsAsync(values["RequestBody"], secretKey)
  
      // CreateSubsSync(values["RequestBody"], partner_global_token, set_partner_global_token)
      event.preventDefault();
      
      const headers = new Headers({
        'Content-Type': values["Content-Type"],
        'X-HS-AccessKey': values["X-HS-AccessKey"],
        'X-HS-Token': partner_global_token,
        'X-HS-RequestID': values["X-HS-RequestID"]
      })
      try{
        // TO REMOVE
        console.log("The value for the X-HS-Token is : - "+partner_global_token)
       const response = await fetch(`https://partner-orchestrator-qa.pp.hotstar-labs.com/v2/partner/subscription/create-async/guest`, {
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
    <FormElement obj = {config["config"]["apis"]["createGuestSubscriptionAsync"]} title = "Create Guest Subscription Async" description = "This Api helps you create guest Subscription asynchronously." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
