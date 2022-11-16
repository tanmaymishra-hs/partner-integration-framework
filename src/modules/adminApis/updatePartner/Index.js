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
                setResult("The request was successful and the response received is NULL")
              }
              }
              catch(error)
              {
                if (response.status === 401) {
                  console.log("inside 401")
                  const sign_in_url = response.headers.get('X-HS-IAuth-Redirect-SignIn');
                  console.log(sign_in_url)
                  if (sign_in_url) {
                    console.log("sign in")
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
    <FormElement obj = {config["config"]["apis"]["updatePartner"]} title = "Update Partner" description = "This Api helps you update a partner" handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
