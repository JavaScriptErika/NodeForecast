# NodeForecast

Whoa, it's Node time! This is my first ever Node app! I just began the Node section in TreeHouse. After running through coding a command line app, there was an extra credit task to:

###### "Create a command line application that takes a zipcode and retrieves the forecast for today."

### Let's Run It

To run the app, make sure you have node installed, and run in your terminal: 

node forecast.js 73301

With the zipcode being your choice in the United States (only) - the output will be in the console, displaying a description of the current weather conditions and temperature in Fahrenheit.

## Time to Digest the Info!

Node.js is non-blocking, meaning it does what is can now, while responding to requests and waits for other tasks. This is a great advantage over blocking, because blocking means an application can only do one task at a time - whether it's waiting or requesting...and your whole application waits and does nothing more. Sounds like a lazy couch potato to me!

### Using http.get, Streams, and JSON

To take advantage of Node's non-blocking feature, Node has streams! The data that comes in triggers an event on the response object, and it also has an end. The data event is triggered multiple times and data chunks come in fragments which is what known as a buffer datatype. A buffer datatype comes from file events and the node network - they're little cute packets of information. It looks like gibberish, and for us devs, is no good news...but you can call the ToString method to make sense of it all. So it's good to grab that flow of data and concatenate it to a variable - in my code, I call it 'body'. 

As the chunks of data comes in, once the data even has received all of the information it needs, there has to be an end event. In order to use this data, we must parse it via JSON - taking it from a string into the JavaScript Object Notation data structure. 

### Command Line Arguments
To be able to pass in a command line argument (such as typing in the zipcode right in your terminal), similar to the Window global object in the browser, Node has an object called process. Process has an array property called argv. Assigning a variable to process.argv.slice(2) will allow you to type in an argument to pass in via the terminal. In argv, the first element is node, the second is the name of the JS app, and the next elements are your command line arguments. The slice method extracts that section at [2], and replaces it with a new string (that in which you type in the command line).

### Additional Thoughts
I think it's interestingg to wrap http.get in a function passing the zipcode variable in, so that the http request will only be fired when a user types in the zipcode via a command line argument. I call the getZipcode function by passing in the process.argv.slice(2) variable.

Let's say I didn't want the user to type in a zipcode, but rather I created an array of zipcodes and assigned that to a variable. I can use the forEach method on that array (it's better to use forEach > map in this case since I'm not looking to return a new array). Since each element is dealt with individually with a function, I could call my getZipcode() and pass in the element variable for it to make the requests to http.get. I thought that was such an interesting and creative use with an array method!
