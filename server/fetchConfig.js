import 'regenerator-runtime/runtime';
import axios from 'axios';
import 'jsdom-global/register';
const config = require('./sample.json')
const configPublic = require('./samplePublic.json')
const configDefault = require('./sampleDefault.json')


export const getConfig = async (req, res)=>{
    var cookies = req.cookies
    let iAuthToken = cookies['X-HS-IAuth']
    let userId = cookies['X-HS-IAuth-UserID']
      try{
        const response = await axios.get(`http://localhost:8080/v2/partner/auth/access`, {
          headers: {
            'X-HS-UserID': userId === undefined?null:userId,
            'X-HS-IAuth' : iAuthToken===  undefined?null:iAuthToken,
          }
        })
            const value = response.data
            console.log(value)
              if(value["access"] == "ADMIN_ACCESS")
              { 
                console.log(value["access"])
                return config
              }
              else if(value["access"] == "PUBLIC_ACCESS")
              { 
                console.log(value["access"])
                return configPublic
              }
          }
          catch(error){
            if (error.response.status === 401) {
                const sign_in_url = error.response.headers['x-hs-iauth-redirect-signin'];
                res.redirect(sign_in_url)
                return null
                // return ["configDefault", sign_in_url]
                // tried this approach because the approach below was not working as there is no window object currently to grab the location
                // if (sign_in_url) {
                //   window.location.href = sign_in_url;
                // }
              }
            else if(error.response.status === 400)
            {
              console.log("Error Case: An error occurred with message: {"+error.response.data["message"]+" }")
            }
            else{
                console.log("Error Case: Your API request did not went through. The status code received was "+error.response.status+" with message "+error.response.statusText)
             }
    }
          return configDefault
    
}