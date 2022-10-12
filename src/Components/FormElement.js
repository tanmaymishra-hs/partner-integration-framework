import React from 'react'
import Input from './Input'
export default function FormElement(props) {
  return (
    <form>
        <h4>Sample API form</h4>
        {props.inputArray && props.inputArray.map((element, idx) => (
          <>
            <Input name = {element.name} inputType = {element.type} placeholder = {element.name} type="header" requestContentType="string"/>
            <br/>
            </>
        ))}
    </form>
  )
}
