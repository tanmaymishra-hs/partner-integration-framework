import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState(props.value);
    const handleOnChange = (event)=>{
        setinputValue(event.target.value)
    }
    return (
    <>
        {props.type !== "submit" && 
            <label htmlFor={props.name}>{props.name + ": "}</label>
        }
        <input type={props.type} name={props.name} placeHolder={props.placeHolder} value={inputValue} onChange={handleOnChange}></input><br></br>
    </>
    )
}
