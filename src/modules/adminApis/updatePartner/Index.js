import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
import {getHeaders} from '../../../utils/headerGenerator';
import { getResult } from '../../../utils/resultGenerator';
let config = require("../../../config.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')
    const handleSubmit = async (event, setisLoading)=>{
        console.log(values)
        event.preventDefault();
        const headers = getHeaders(config['config']['apis']['updatePartner']['headers'], values);
        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath += config['config']['apis']['updatePartner']['path']
          console.log(`URL is ${urlPath}/${values["Partner Name"]}?country=${values["country"]}`)
          
          await getResult(setResult, 200, `${urlPath}/${values["Partner Name"]}?country=${values["country"]}`, 'PATCH', headers, values['RequestBody']);
          }
    
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["updatePartner"]} title = "Update Partner" description = "This Api helps you update a partner" handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
