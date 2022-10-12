import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState(props.value);
    const handleOnChange = (event)=>{
        setinputValue(event.target.value)
    }
    return (
    <div >
        {props.inputType !== "submit" && 
            <label style={{'display':'inline-block'}} htmlFor={props.name}>
                <p style={{'display':'block'}}>{props.name + ": "}</p>
                <i style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
                <p style={{'display':'block'}}>{props.requestContentType}</p>
            </label>
        }
        <input style={{'display':'inline-block', 'position':'absolute'}} type={props.inputType} name={props.name} placeHolder={props.placeHolder} value={inputValue} onChange={handleOnChange}></input><br></br>
    </div>
    )
}
