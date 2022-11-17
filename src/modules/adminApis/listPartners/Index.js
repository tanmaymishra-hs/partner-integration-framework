import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
import {getHeaders} from '../../../utils/headerGenerator';
let config = require("../../../config.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
        console.log(values)
        event.preventDefault();
        const headers = getHeaders(config['config']['apis']['listPartners']['headers'], values);

        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath += config['config']['apis']['listPartners']['path']
         const response = await fetch(`${urlPath}${values["Partner Name"]}`, {
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
    <FormElement obj = {config["config"]["apis"]["listPartners"]} title = "List Partners" description = "This Api list all the partners with the given partner name." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
