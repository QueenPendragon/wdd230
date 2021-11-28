//ADD the key and change units to imperial
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=1158060aa6483d99cf7e9eeba387030d&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentCondition").innerHTML =
      weatherInfo.weather[0].main;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("windChill").innerHTML = weatherInfo.wind.gust;
    document.getElementById("currentHumidity").innerHTML =
      weatherInfo.main.humidity;
    document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

    /* const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;*/
  }); //end of "then" fat arrow function

//Five Day forcast
const fiveDayapiURL =
  "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1158060aa6483d99cf7e9eeba387030d&units=imperial";

fetch(fiveDayapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    console.log(weatherInfo.city.name);

    const mydate = new Date();

    const y = mydate.getDay();
    console.log(y);

    const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";

    console.log(myweekday[3]);

    const d = new Date();

    const todayDayNumber = d.getDay();

    let forecastDayNumber = todayDayNumber;

    console.log(forecastDayNumber);

    for (i = 0; i < weatherInfo.list.length; i++) {
      var time = weatherInfo.list[i].dt_txt;
      if (time.includes("18:00:00")) {
        let theDayName = document.createElement("h5");
        theDayName.textContent = myweekday[forecastDayNumber];
        console.log(">" + myweekday[forecastDayNumber]);

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById("weatherforecast").appendChild(theDay);

        forecastDayNumber += 1;

        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }
      }
    }
  }); //end of "then" fat arrow function
