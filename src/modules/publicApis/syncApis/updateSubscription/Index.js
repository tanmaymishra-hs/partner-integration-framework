import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
import {replaceURL} from '../../../../utils/ReplaceUrl'
let config = require("../../../../configPublic.json")

const host = "http://localhost:8080"

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

      let url = replaceURL(config["config"]["apis"]["updateSubscription"]["path"], config["config"]["apis"]["updateSubscription"]["pathParams"],  config["config"]["apis"]["updateSubscription"]["queryParams"], values)
      console.log(url)
      try{
       const response = await fetch(host+url, {
        method: 'POST',
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
    <FormElement obj = {config["config"]["apis"]["updateSubscription"]} title = "Update Subscription" description = "This Api helps you update a Subscription ." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
