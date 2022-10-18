import React, { useState } from 'react'
import Input from './Input'
export default function FormElement(props) {
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(values)
    const headers = new Headers({
      'Content-Type': values["Content-Type"],
      'X-HS-AccessKey': values["X-HS-Access-Key"]
    })

    await fetch(`https://partner-orches-service-api-gateway-aps1.pp.hotstar-labs.com/v2/partner/subscription/${values["partnerSubscriptionId"]}`, {
     method: 'GET',
     headers,
     mode: 'no-cors'
        })
        .then(results => console.log(results))
  }
  const [values, setValues] = useState({})
  return (
    <form>
        <h2>{props.title}</h2>
        <br/>
        <h3>{props.description}</h3>
        <br/>
        <br/>
        {props.obj["pathParams"] && props.obj["pathParams"].map((element) => (
          <>
          <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type="pathParams" requestContentType="string"/>
            <br/>
          </>
        ))}
        {props.obj["queryParams"] && props.obj["queryParams"].map((element, idx) => (
          <>
          <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type="queryParams" requestContentType="string"/>
            <br/>
          </>
        ))}
        {props.obj["headers"] && props.obj["headers"].map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type="header" requestContentType="string"/>
            <br/>
            </>
        ))}
        {props.obj["bodyParams"] && props.obj["bodyParams"].map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {"RequestBody"} inputType = {"JSON"} placeholder = {element} type="body" requestContentType="string"/>
            <br/>
            </>
        ))}
        {
          props.obj["bodyParams"]&& <>
          <br/>
          <br/>
          <br/>
          <br/>
          </> 
        }
        <button input="submit" style={{'height':'30px','width':'300px'}} onClick={handleSubmit}>Execute</button>        
    </form>
  )
}
