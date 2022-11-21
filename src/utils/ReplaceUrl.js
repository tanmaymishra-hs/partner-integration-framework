export const replaceURL = (url, pathParams, queryParams, values) => {

    pathParams.forEach(element => {
      url = url+"/"+values[element.name]
    });
    queryParams.forEach((element, index) =>{
      if(index ===0)
      {
        url = url+"?"+element.name+"="+values[element.name]
      }else{
        url = url+"&"+element.name+"="+values[element.name]
      }
      
  
    });
  return url
  }