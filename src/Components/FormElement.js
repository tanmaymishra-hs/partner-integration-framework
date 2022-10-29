import React, { useState } from 'react'
import Input from './Input'
import PropTypes from 'prop-types'


export default function FormElement(props) {

  const mapInputValues = (element)=>{
    const {name, type, requestContentType} = element
    return{
      name: name,
      type: type,
      requestContentType: requestContentType
    }
  }
  const {obj:{pathParams, queryParams, headers, bodyParams} = {}, title = "", description = ""} = props
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
        <h2>{title}</h2>
        <br/>
        <h3 className='Body-1-Medium'>{description}</h3>
        <br/>
        <br/>
        <div className='Input'>
        {pathParams && pathParams.map((element, idx) => (
          <>
          <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {queryParams && queryParams.map((element, idx) => (
          <>
        <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {headers && headers.map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {bodyParams && bodyParams.map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {"RequestBody"} inputType = {"JSON"} placeholder = {element} type="body" requestContentType="JSON"/>
            <br/>
            </>
        ))}
        {
          bodyParams&& <>
          <br/>
          <br/>
          <br/>
          <br/>
          </> 
        }
        <button className="btn" style={{"width":"35%"}} input="submit" onClick={handleSubmit}><span className='ON_BRAND BUTTON1_SEMIBOLD'>Execute</span></button>
        </div>
    </form>
  )
}
FormElement.propTypes ={
  obj : PropTypes.object,
  title : PropTypes.string,
  description : PropTypes.string
}