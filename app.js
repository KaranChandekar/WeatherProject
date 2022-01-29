const express = require("express");
const { STATUS_CODES } = require("http");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=59c81e0f9698c05cf5739452f34babb9&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.weather[0].description;
      console.log(temp);
    });
  });

  res.send("Server is up and running.");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
