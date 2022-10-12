import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState(props.value);
    const handleOnChange = (event)=>{
        setinputValue(event.target.value)
    }
    return (
    <>
        {props.inputType !== "submit" && 
            <label style={{'display':'inline-block'}} htmlFor={props.name}>
                <p style={{'display':'block'}}>{props.name + ": "}</p>
                <p style={{'display':'block'}}>{props.type}</p>
                <p style={{'display':'block'}}>{props.requestContentType}</p>
            </label>
        }
        <input style={{'display':'inline-block'}} type={props.inputType} name={props.name} placeholder={props.placeholder} value={inputValue} onChange={handleOnChange}></input><br></br>
    </>
    )
}
