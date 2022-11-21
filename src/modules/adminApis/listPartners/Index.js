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
        const headers = getHeaders(config['config']['apis']['listPartners']['headers'], values);

        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath += config['config']['apis']['listPartners']['path']
          // console.log(`URL is ${urlPath}/${values["Partner Name"]}`)
          await getResult(setResult, 200, `${urlPath}${values["Partner Name"]}`, 'GET', headers);
        //  const response = await fetch(`${urlPath}/${values["Partner Name"]}`, {
        //   method: 'GET',
        //   headers,
        //   mode: 'cors'
        //      })
            }
    
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["listPartners"]} title = "List Partners" description = "This Api list all the partners with the given partner name." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
