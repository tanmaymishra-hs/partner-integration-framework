import {Singleton} from '../src/utils/configSingleton';
import fs from 'fs';
let config = require('./sample.json')

export const getConfig = ()=>{
 
    return config;
}