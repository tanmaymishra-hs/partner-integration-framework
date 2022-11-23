import React, {useState} from 'react'
import { json } from 'react-router-dom';
import FormElement from '../../../Components/FormElement';
import {getHeaders} from '../../../utils/headerGenerator';
import {getResult} from '../../../utils/resultGenerator';
let config = require("../../../config.json");

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async(event, setisLoading)=>{
        event.preventDefault();
        const headers = getHeaders(config['config']['apis']['create']['headers'], values);
        console.log(headers)
        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath = urlPath+config['config']['apis']['create']['path']
          await getResult(setResult, 201, urlPath, 'POST', headers, values['RequestBody']);
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
