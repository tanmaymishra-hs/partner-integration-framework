import React from 'react'
import Input from './Input'
import PropTypes from 'prop-types'
import {Box, Card, CardContent} from '@mui/material'

export default function FormElement(props) {
  const [isLoading, setisLoading] = useState(false)
  // const mapInputValues = (element)=>{
  //   const {name, type, requestContentType} = element
  //   return{
  //     name: name,
  //     type: type,
  //     requestContentType: requestContentType
  //   }
  // }
  const handleSubmitLocal = (event)=>{
    setisLoading(true)
    handleSubmit(event, setisLoading)
  }

  const {obj:{pathParams, queryParams, headers, variables, bodyParams} = {}, title = "", description = "", handleSubmit, values, setValues, result} = props

  return (
    <Box width='100%' className='boxClass transparent'>
    <Card className='boxClass' style={{"backgroundColor":"inherit"}}>
    <CardContent className='boxClass' style={{"padding":"50px"}}>
    <form>
        <h2>{title}</h2>
        <br/>
        <h3 className='Body-1-Medium'>{description}</h3>
        <br/>
        <br/>
        <div className='Input'>
        {pathParams && pathParams.map((element, idx) => (
          <>
          <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {queryParams && queryParams.map((element, idx) => (
          <>
        <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
          </>
        ))}
        {headers && headers.map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {variables && variables.map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {element.name} inputType = {element.type} placeholder = {element.name} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {bodyParams && bodyParams.map((element, idx) => (
          <>
            <Input values = {values} setValues = {setValues} name = {"RequestBody"} inputType = {"JSON"} placeholder = {element.RequestBody} type={element.type} requestContentType={element.requestContentType}/>
            <br/>
            </>
        ))}
        {
          bodyParams&& <>
          <br/>
          <br/>
          <br/>
          <br/>
          </> 
        }
        {!isLoading && <button className="btn ON_BRAND BUTTON1_SEMIBOLD" style={{"width":"100%"}} input="submit" onClick={handleSubmitLocal}>Execute</button>}
        {isLoading && <button disabled={true} className="btn loading ON_BRAND BUTTON1_SEMIBOLD" style={{"width":"100%"}} input="submit" onClick={handleSubmitLocal}>Execute</button>}
        </div>
        {result && <pre>{JSON.stringify(result, 'undefined', 4)}</pre>}
        
    </form>
    </CardContent>
    </Card>
    </Box>
  )
}
FormElement.propTypes ={
  obj : PropTypes.object,
  title : PropTypes.string,
  description : PropTypes.string
}