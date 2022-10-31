import React, {useState} from 'react'

export default function Input(props) {
    const {placeholder} = props || {}
    
    const [inputValue, setinputValue] = useState("");
    const [value, setValue] = useState(JSON.stringify(placeholder));

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
    <div style={{"display":"flex"}}>
        <label className="row"  htmlFor={props.name}>
            <p className="Body-2-Medium" style={{'display':'block'}}>{props.name + ": "}</p>
            <i className="Body-3-Regular" style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
            <p className="Body-3-Medium" style={{'display':'block'}}>{props.requestContentType}</p>
        </label>
        {typeof props.placeholder !== "object"? 
            <input className="row"  type="text" name={props.name} placeholder={placeholder} value={inputValue} onChange={handleOnChange}></input>:
            <textarea className= "row" value={value} onChange={handleOnChange} rows={8} cols={40}>{value}</textarea>        
            }

    </div>
    )
}
