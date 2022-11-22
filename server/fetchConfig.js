import {Singleton} from '../src/utils/configSingleton';
import http from 'http';
let config = require('./sample.json')
export const getConfig = ()=>{
    let obj = Singleton.getInstance(config)
    console.log('inside fetchConfig file, Singleton object is')
    console.log(Singleton.getInstance())
    // return obj;
}

export const fetchConfig = ()=>{
    let client = http.createClient(3005, 'localhost');
    let request = client.request('GET', '/getconfig');
    request.end();
    request.on("response", function (response) {
        console.log('Status:', response.statusCode);
        console.log('Headers: ', response.headers);
        response.pipe(process.stdout);
});
}