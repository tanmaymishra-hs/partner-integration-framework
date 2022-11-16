import React, {useState} from 'react'
import FormElement from '../../../../Components/FormElement';
import { moveSubscription } from '../../../../utils/MoveSubscription';
let config = require("../../../../configPublic.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const [partner_global_token, set_partner_global_token] = useState('')

    const handleSubmit = async (event, setisLoading)=>{
      var token = moveSubscription(values["RequestBody"])
      set_partner_global_token(token)

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
          console.log(values)
         const response = await fetch(`http://localhost:8080/v2/partner/subscription/move`, {
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
              if (response.status === 401) {
                const sign_in_url = response.headers.get('X-HS-IAuth-Redirect-SignIn');
                if (sign_in_url) {
                  window.location.href = sign_in_url;
                }
              }
              else{
                setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
              }
              
            }
        }          
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["moveSubscription"]} title = "Move Subscription Sync" description = "This Api helps you move Subscription sync." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
