const getHeaders = (arr, values) => {
    let obj = {};
    arr.forEach((elem, i) => {obj[elem['name']] = values[elem['name']]});
    return new Headers(obj);
}

export {getHeaders};