import React from 'react'
import Input from './Input'
export default function FormElement(props) {
  return (
    <form>
        <h4>Sample API form</h4>
        {props.inputArray.map((element, idx) => (
          <>
            <Input name = "element.name" type = "element.type" placeholder = "element.name"/>
            <br/>
            </>
        ))}
    </form>
  )
}
