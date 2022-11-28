import 'regenerator-runtime/runtime';
import axios from 'axios';
import 'jsdom-global/register';
const config = require('./sample.json')
const configPublic = require('./samplePublic.json')
const configDefault = require('./sampleDefault.json')

export const getConfig = async ()=>{
    let userId = "viral.tiwari.int@hotstar.com"
      try{
        const response = await axios.get(`http://localhost:8080/v2/partner/auth/access`, {
        headers: {'X-HS-IAuth': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njk2NjI2OTYsImp0aSI6IjcxMjRmNGM0LTE4MzctNDgyYy05NGE5LTIyMDk1NzRkMDA1YSIsImlhdCI6MTY2OTYxOTQ5NCwibmJmIjoxNjY5NjE5NDk0LCJzdWJqZWN0X2lkIjoic3dhcG5pbC5rYXNsaXdhbC5pbnRAaG90c3Rhci5jb20ifQ.avJguRtXTy77bXFjp_K8PqODv8-aF9UZHmsCkV1V5ctDFTtih39TdyY-o_unFo1lyJ_M7WbVDWjCKvm6GNTc4g',
        'Content-Type': 'application/json',
        'X-HS-UserID' : userId},
           })
            const value = response.data
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
                console.log(sign_in_url)
                return ["configDefault", sign_in_url]
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