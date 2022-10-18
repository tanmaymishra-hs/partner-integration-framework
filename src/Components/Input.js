import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState("");
    const [value, setValue] = useState(JSON.stringify(props.placeholder));

    const handleOnChange = (event)=>{
        if(props.inputType === "JSON")
        {   
            setValue(event.target.value)
            props.setValues(prevState => ({
                ...prevState,
                [props.name]: value
            }));
        }
        else{
            setinputValue(event.target.value)
            props.setValues(prevState => ({
                ...prevState,
                [props.name]: inputValue
            }));
        }
        
        
    }

    return (
    <div>
        {props.inputType !== "submit" && 
            <label style={{'display':'inline-block'}} htmlFor={props.name}>
                <p style={{'display':'block'}}>{props.name + ": "}</p>
                <i style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
                <p style={{'display':'block'}}>{props.requestContentType}</p>
            </label>
        }
        {typeof props.placeholder !== "object"? 
            <input style={{'display':'inline-block', 'position':'absolute'}} type={props.inputType} name={props.name} placeholder={props.placeholder} value={inputValue} onChange={handleOnChange}></input>:<textarea style={{'display':'inline-block', 'position':'absolute'}} value={value} onChange={handleOnChange} rows={8} cols={40}>{value}</textarea>
        }
    </div>
    )
}
