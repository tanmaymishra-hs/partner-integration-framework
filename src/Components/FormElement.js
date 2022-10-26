import React, { useState } from 'react'
import Input from './Input'
export default function FormElement(props) {

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const headers = new Headers({
      'Content-Type': values["Content-Type"],
      'X-HS-AccessKey': values["X-HS-AccessKey"]
    })
    try{
      await fetch(`http://localhost:8080/v2/partner/subscription/${values["SubscriptionId"]}`, {
      method: 'GET',
      headers,
      mode: 'cors'
         })
         .then(results => console.log(results))}

    catch(error){console.error(error)}

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
          <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {props.obj["queryParams"] && props.obj["queryParams"].map((element, idx) => (
          <>
        <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {props.obj["headers"] && props.obj["headers"].map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {props.obj["bodyParams"] && props.obj["bodyParams"].map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {"RequestBody"} inputType = {"JSON"} placeholder = {element} type="body" requestContentType="JSON"/>
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
