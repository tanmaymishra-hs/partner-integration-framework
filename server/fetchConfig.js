import {Singleton} from '../src/utils/configSingleton';
import fs from 'fs';
let config = require('./samplePublic.json')

export const getConfig = ()=>{
 
    return config;
}