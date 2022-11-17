const getResult = async (response, setResult, successCode)=>{
    try{
        const value = await response.json()
        
        if(response.status !== successCode)
        {
          setResult("Error Case: An error occurred with message: {"+value["message"]+"} and with response code: {"+value["responseCode"]+"}")
        }
        else{
          setResult(value)
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
export {getResult};