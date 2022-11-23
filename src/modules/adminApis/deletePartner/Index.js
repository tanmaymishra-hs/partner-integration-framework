import React, {useState} from 'react'
import FormElement from '../../../Components/FormElement';
import {getHeaders} from "../../../utils/headerGenerator"
import { getResult } from '../../../utils/resultGenerator';
let config = require("../../../config.json")

export function Index() {
  const [values, setValues] = useState({})
  const [result, setResult] = useState('')

  const handleSubmit = async (event, setisLoading)=>{
      console.log(values)
      event.preventDefault();
      
      const headers = getHeaders(config['config']['apis']['deletePartner']['headers'], values);
      try {
          let urlPath = process.env.REACT_APP_BASE_URL;
          urlPath = urlPath+config['config']['apis']['deletePartner']['path']
          await getResult(setResult, 200, `${urlPath}/${values["Partner Name"]}?country=${values["country"]}`, 'DELETE', headers);
      }
      catch(error){console.error(error)}
      setisLoading(false)
  }
  return (
    <FormElement obj = {config["config"]["apis"]["deletePartner"]} title = "Delete Partner" description = "This Api helps you delete a partner from database." handleSubmit={handleSubmit} values={values} setValues={setValues} result={result}/>
  )
}
