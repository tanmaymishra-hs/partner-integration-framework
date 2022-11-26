const getAdminResult = async (setResult, successCode, url, method, headers, reqBody)=>{
  const response = await fetch(url, {
      method: method,
      headers,
      body: (reqBody?reqBody:null),
      mode: 'cors'
  })
  try{
      const value = await response.json()
      
      if(response.status !== parseInt(successCode))
      {
        setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
      }
      else{
        setResult(value?value:'request was successfull with null response')
      }
      }
      catch(error)
      {
        if (response.status === 401) {
          const sign_in_url = response.headers.get('X-HS-IAuth-Redirect-SignIn');
          if (sign_in_url) {
            window.location.href = sign_in_url;
          }
        }
        else{
        setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
      }
    }
}

const getPublicResult = async (setResult, successCode, url, reqMethod, headers, reqBody=null)=>{
    const response = await fetch(url, {
        method: reqMethod,
        headers,
        body: (reqBody?reqBody:null),
        mode: 'cors'
    })
    try{
        const value = await response.json()
        
        if(response.status !== parseInt(successCode))
        {
          setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
        }
        else{
          setResult(value?value:'request was successfull with null response')
          console.log('request was successfull')
        }
        }
        catch(error)
        {
          setResult("Error Case: Your API request did not. The status code received was "+response.status+" with message "+response.statusText)
      }
}
export {getPublicResult, getAdminResult};