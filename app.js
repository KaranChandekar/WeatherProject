const express = require("express");
const { STATUS_CODES } = require("http");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log("Post request recieved!");
})

// const query = "London";
// const apiKey = "59c81e0f9698c05cf5739452f34babb9";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

// https.get(url, function (response) {
//   console.log(response.statusCode);

//   response.on("data", function (data) {
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const weatherDescription = weatherData.weather[0].description;
//     const icon = weatherData.weather[0].icon;
//     const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//     res.write("<p>The weather is currently " + weatherDescription + "<p>");
//     res.write("<h1>The temperature in London is " + temp + "&#176" + " Celcius.</h1>");
//     res.write(`<img src="` + imgUrl + `">`);

//     res.send();
//   });
// });

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
