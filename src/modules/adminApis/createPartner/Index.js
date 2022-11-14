import React, {useState} from 'react'
import { json } from 'react-router-dom';
import FormElement from '../../../Components/FormElement';
let config = require("../../../config.json")
// const configurator = require('../../../configurator')


export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async(event, setisLoading)=>{
        // console.log(values)
        event.preventDefault();
        
        const headers = new Headers({
          'X-HS-IAuth': values["X-HS-IAuth"],
          'Content-Type': values["Content-Type"]
        })
        try{
          // const urlPath = configurator.BASE_URL;
          const urlPath = config['config']['apis']['create']['path']
          // console.log(url)
          const response = await fetch(urlPath, {
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
    <>
    <FormElement obj = {config["config"]["apis"]["create"]} title = "Create Partner" description = "This Api helps you create a partner" handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
    </>
   
  )
}
