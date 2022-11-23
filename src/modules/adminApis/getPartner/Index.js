import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
import {getHeaders} from "../../../utils/headerGenerator";
import {getResult} from '../../../utils/resultGenerator'
let config = require("../../../config.json")

export function Index() {
    const [values, setValues] = useState({})
    const [result, setResult] = useState('')

    const handleSubmit = async (event, setisLoading)=>{
        console.log(values)
        event.preventDefault();
        const headers = getHeaders(config['config']['apis']['getPartner']['headers'], values);
        try{
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath += config['config']['apis']['getPartner']['path']
          await getResult(setResult, 200, `${urlPath}${values["Partner Name"]}?country=${values["country"]}`, 'GET', headers);
          }
        catch(error){console.error(error)}
        setisLoading(false)
      }
  return (
    <FormElement obj = {config["config"]["apis"]["getPartner"]} title = "Get Partner" description = "This Api helps you to get the information related to a partner." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
