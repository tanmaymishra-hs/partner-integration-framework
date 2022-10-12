import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState("");
    const handleOnChange = (event)=>{
        console.log("value now is "+event.target.value);
        setinputValue(event.target.value)
    }
    const [placeHolder, setPlaceHolder] = useState(props.placeholder)

    return (
    <div>
        {props.inputType !== "submit" && 
            <label style={{'display':'inline-block'}} htmlFor={props.name}>
                <p style={{'display':'block'}}>{props.name + ": "}</p>
                <i style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
                <p style={{'display':'block'}}>{props.requestContentType}</p>
            </label>
        }
        {typeof placeHolder !== "object" && 
            <input style={{'display':'inline-block', 'position':'absolute'}} type={props.inputType} name={props.name} placeholder={placeHolder} value={inputValue} onChange={handleOnChange}></input>
        }
        {
            typeof placeHolder === "object" && 
            <textarea style={{'display':'inline-block', 'position':'absolute'}} placeholder={JSON.stringify(placeHolder)} onChange={handleOnChange}>{inputValue}</textarea>
        }

    </div>
    )
}
