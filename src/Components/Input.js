import React, {useState} from 'react'

export default function Input(props) {
    const [inputValue, setinputValue] = useState("");
    const handleOnChange = (event)=>{
        setinputValue(event.target.value)
    }

    return (
    <div style={{"display":"flex"}}>
        <label className="row"  htmlFor={props.name}>
            <p className="Body-2-Medium" style={{'display':'block'}}>{props.name + ": "}</p>
            <i className="Body-3-Regular" style={{'display':'block', 'color':'#808080'}}>{'('+props.type+')'}</i>
            <p className="Body-3-Medium" style={{'display':'block'}}>{props.requestContentType}</p>
        </label>
        
        {typeof props.placeholder !== "object"? 
            <input className="row"  type="text" name={props.name} placeholder={props.placeholder} value={inputValue} onChange={handleOnChange}></input>:
            <textarea className= "row" placeholder={JSON.stringify(props.placeholder)} onChange={handleOnChange}>{inputValue}</textarea>
        }
    </div>
    )
}
