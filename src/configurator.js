const dotenv = require('dotenv')
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
console.log(`directory in configurator is ${__dirname}/${process.env.NODE_ENV}.env`)
console.log(`PORT in configurator is ${process.env.PORT}`)
module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'dev',
    BASE_URL : process.env.BASE_URL || 'http://localhost:3005',
    PORT : process.env.PORT || 3005
}