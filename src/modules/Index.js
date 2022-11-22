import React, {useState} from 'react'
import FormElement from '../Components/FormElement';
import {getHeaders} from '../utils/headerGenerator';
import { replaceURL } from '../utils/ReplaceUrl';
import {getAdminResult} from '../utils/AdminResultGenerator'

export function Index(props) {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const {config} = props
    const handleSubmit = async(event, setisLoading)=>{
        event.preventDefault();
        const headers = getHeaders(config.headers, values)
        try{
            let baseUrl = replaceURL(config.path, config.pathParams, config.queryParams)
            // doubt here about how to grab the host and how it would work
            let host = 'http://localhost:8080'
            let url = host+baseUrl
            await getAdminResult(setResult, config.successCode, url, config.method, headers, config.bodyParams.length>0?values['RequestBody']:null)
        }          
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <>
    <FormElement obj = {config} title = {config.title} description = {config.description} handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
    </>
   
  )
}
