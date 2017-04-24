//Goal: Create a command line application that takes a Zip Code and retrieves the forecast for today

const http = require('http');

let body = '';
const area = process.argv.slice(2);

const getZipcode = function (zipcode) {
	http.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=867d2e500164f090eaf4c55feba436b2&units=imperial&zip=${zipcode},us`, (response) => {

		response.on('data', (dataChunk) => {
			body += dataChunk;
		});

		response.on('end', () => {
			let JSONObject = JSON.parse(body);
			printForecast(JSONObject);
		});
	});
}

function printForecast(currentWeather) {

	console.log(`Current conditions: ${currentWeather.weather[0].description} | ${currentWeather.main.temp} °F`);

}

getZipcode(area);
