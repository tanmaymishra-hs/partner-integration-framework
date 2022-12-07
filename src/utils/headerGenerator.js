const getHeaders = (arr, values, iAuthToken) => {
    let obj = {};
    arr.forEach((elem, i) => {obj[elem['name']] = values[elem['name']]});
    if(iAuthToken != null)
    {
        obj['X-HS-IAuth'] = iAuthToken
    }
    return new Headers(obj);
}

export {getHeaders};