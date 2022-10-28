import React from 'react'
import Input from './Input'
export default function FormElement(props) {
  return (
    <form>
        <h2>{props.title}</h2>
        <br/>
        <h3 className='Body-1-Medium'>{props.description}</h3>
        <br/>
        <br/>
        <div className='Input'>
        {props.obj["pathParams"] && props.obj["pathParams"].map((element, idx) => (
          <>
          <Input name = {element.name} inputType = {element.inputType} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {props.obj["queryParams"] && props.obj["queryParams"].map((element, idx) => (
          <>
          <Input name = {element.name} inputType = {element.inputType} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {props.obj["headers"] && props.obj["headers"].map((element, idx) => (
          <>
            <Input name = {element.name} inputType = {element.inputType} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {props.obj["bodyParams"] && props.obj["bodyParams"].map((element, idx) => (
          <>
            <Input name = {"RequestBody"} inputType = {"JSON"} placeholder = {element} type="body" requestContentType="JSON"/>
            <br/>
            </>
        ))}
        <button className="btn" style={{"width":"35%"}} input="submit"><span className='ON_BRAND BUTTON1_SEMIBOLD'>Execute</span></button>
        </div>
    </form>
  )
}
