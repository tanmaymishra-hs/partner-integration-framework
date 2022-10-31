import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event)=>{
        // console.log(values)
        // event.preventDefault();
        
        // const headers = new Headers({
        //   'Content-Type': values["Content-Type"],
        //   'X-HS-AccessKey': values["X-HS-AccessKey"]
        // })
        // try{
        //  const response = await fetch(`http://localhost:8080/v2/partner/subscription/${values["SubscriptionId"]}`, {
        //   method: 'GET',
        //   headers,
        //   mode: 'cors'
        //      })
        //      const value = await response.json()
        //      if(response.status !== 200){
        //       if(response === null){
        //         setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
        //      }
        //      else{
        //       setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
        //      }
        //      }
        //      else{
        //       setResult(value)
          
        //      }
        //     }
        // catch(error){console.error(error)}
    
      }
  return (
    <FormElement obj = {config["config"]["apis"]["moveSubscription"]} title = "Move Subscription Sync" description = "This Api helps you move Subscription sync." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}