import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
        console.log(values)
        event.preventDefault();
        
        const headers = new Headers({
          'Content-Type': values["Content-Type"],
          'X-HS-AccessKey': values["X-HS-AccessKey"]
        })
        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath += config['config']['apis']['getSubscription']['path']
          console.log(`${urlPath}${values["SubscriptionId"]}`)
         const response = await fetch(`${urlPath}${values["SubscriptionId"]}`, {
          method: 'GET',
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
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["getSubscription"]} title = "Get Subscription ID" description = "This Api helps you to get the subscription id." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
