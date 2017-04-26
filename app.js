//Import forecast module
const forecast = require('./forecast');
//Assign command line argument to area
const area = process.argv.slice(2);
//Call imported module's function and pass in command line argument
forecast.zip(area);
