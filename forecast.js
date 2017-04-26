//Goal: Create a command line application that takes a Zip Code and retrieves the forecast for today

const http = require('http');

const printForecast = (currentWeather) => {
	console.log(`Current conditions: ${currentWeather.weather[0].description} | ${currentWeather.main.temp} °F`);
}

const getZipcode = function (zipcode) {
	try { //catches thrown error if url is malformed
		const request = http.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=867d2e500164f090eaf4c55feba436b2&units=imperial&zip=${zipcode},us`, (response) => {
			let body = '';

			if (response.statusCode === 200) { 	//checks status of server response

				response.on('data', (dataChunk) => {
					body += dataChunk;
				});

				response.on('end', () => {
					try {
						let JSONObject = JSON.parse(body);
						printForecast(JSONObject);
					} catch (error) {
						console.error(`JSON parse error: ${error.message}`);
					}
				});
			} else {
				console.error(`Status error: ${response.statusCode} - ${http.STATUS_CODES[response.statusCode]}`);
			}
		});

		//error emitted from async call
		request.on('error', error => {
			console.error(`API request error: ${error.message}`);
		});
	} catch (error) {
		console.error(`Check url for error: ${error.message}`);
	}
}

module.exports.zip = getZipcode;
