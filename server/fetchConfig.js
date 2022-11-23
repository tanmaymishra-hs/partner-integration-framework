import {Singleton} from '../src/utils/configSingleton';
import fs from 'fs';
let config = require('./sample.json')
export const getConfig = ()=>{
    let obj = Singleton.getInstance(config)
    // fs.writeFileSync('../src/file.json', JSON.stringify(jsonVariable));
    return obj;
}