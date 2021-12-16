//ADD the key and change units to imperial

const currentDate = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("currentDate").textContent =
  new Date().toLocaleDateString("en-us", currentDate);

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const apiURL =
  "//api.openweathermap.org/data/2.5/onecall?lat=33.41&lon=-111.83&exclude=hourly,daily&appid=1158060aa6483d99cf7e9eeba387030d&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById("currentCondition").innerHTML =
      weatherInfo.current.weather.main;
    document.getElementById("currentTemp").innerHTML = weatherInfo.current.temp;
    document.getElementById("windChill").innerHTML =
      weatherInfo.current.wind_deg;
    document.getElementById("currentHumidity").innerHTML =
      weatherInfo.current.humidity;
    document.getElementById("windSpeed").innerHTML =
      weatherInfo.current.wind_speed;
  }); //end of "then" fat arrow function

//Company cards
const requestURL = "json/index.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject["directory"];
    for (let i = 0; i < directory.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");

      h2.textContent = directory[i].name;

      card.appendChild(h2);

      document.querySelector("div.cards").appendChild(card);
      let image = document.createElement("img");

      image.setAttribute("src", directory[i].photo);

      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
      let website = document.createElement("a");
      website.setAttribute("target", "_blank");
      website.setAttribute("href", directory[i].link);
      website.innerHTML = "Website";

      card.appendChild(website);

      document.querySelector("div.cards").appendChild(card);

      let address = document.createElement("p");

      address.textContent = directory[i].address;

      card.appendChild(address);

      document.querySelector("div.cards").appendChild(card);

      let phone = document.createElement("p");

      phone.textContent = directory[i].phone;

      card.appendChild(phone);

      document.querySelector("div.cards").appendChild(card);
    }
  });
