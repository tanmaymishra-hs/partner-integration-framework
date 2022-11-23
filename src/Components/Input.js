import React, {useState} from 'react'

export default function Input(props) {
    const {placeholder} = props || {}
    const [inputValue, setinputValue] = useState("");
    const [value, setValue] = useState(JSON.stringify(placeholder, null, 2));

    const handleOnChange = async(event)=>{
        if(props.inputType === "JSON")
        {   
            let tempValue = event.target.value
            setValue(tempValue)
            props.setValues(prevState => ({
                ...prevState,
                [props.name]: tempValue
            }));
        }
        else{
            let tempValue = event.target.value
            setinputValue(tempValue)
            props.setValues(prevState => ({
                ...prevState,
                [props.name]: tempValue
            }));
        }
        
    }

    return (
    <div style={{"display":"flex"}}>
        <label className="row rowLabel"  htmlFor={props.name}>
            <p className="Body-2-Medium" style={{'display':'block'}}>{props.name + ": "}</p>
            <i className="Body-3-Regular" style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
            <p className="Body-3-Medium" style={{'display':'block'}}>{props.requestContentType}</p>
        </label>
        {typeof props.placeholder !== "object"? 
            <input className="row rowInput"  type="text" name={props.name} placeholder={placeholder} value={inputValue} onChange={handleOnChange}></input>:
            <textarea className= "row rowInput" value={value} onChange={handleOnChange} rows={8} cols={40}>{value}</textarea>        
            }

    </div>
    )
}
