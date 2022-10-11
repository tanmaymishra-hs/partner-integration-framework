import React from 'react'

export default function Input(props) {
    return (
    <>
        {props.type !== "submit" && 
            <label htmlFor={props.name}>{props.name + ": "}</label>
        }
        <input type={props.type} name={props.name} placeHolder={props.placeHolder}></input><br></br>
    </>
    )
}
