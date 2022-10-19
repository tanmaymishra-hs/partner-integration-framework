import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState("");
    const handleOnChange = (event)=>{
        setinputValue(event.target.value)
    }

    return (
    <div>
        <label style={{'display':'inline-block'}} htmlFor={props.name}>
            <p style={{'display':'block'}}>{props.name + ": "}</p>
            <i style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
            <p style={{'display':'block'}}>{props.requestContentType}</p>
        </label>
        
        {typeof props.placeholder !== "object"? 
            <input style={{'display':'inline-block', 'position':'absolute'}} type="text" name={props.name} placeholder={props.placeholder} value={inputValue} onChange={handleOnChange}></input>:
            <textarea style={{'display':'inline-block', 'position':'absolute'}} placeholder={JSON.stringify(props.placeholder)} onChange={handleOnChange}>{inputValue}</textarea>
        }
    </div>
    )
}
