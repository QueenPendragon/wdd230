//toLocaleDateString
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

const element = document.querySelector("#message");
if (dayNumber == 5) {
  element.classList.add("showme");
} else {
  element.classList.add("hideme");
}

//cards JS

const requestURL = "json/index.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement("section");

      let h2 = document.createElement("h2");

      h2.textContent = towns[i].name;

      card.appendChild(h2);

      document.querySelector("div.cards").appendChild(card);

      let motto = document.createElement("p");

      motto.textContent = towns[i].motto;

      card.appendChild(motto);

      document.querySelector("div.cards").appendChild(card);

      let year = document.createElement("p");

      year.textContent = "Founded: " + towns[i].yearFounded;

      card.appendChild(year);

      document.querySelector("div.cards").appendChild(card);

      let pop = document.createElement("p");

      pop.textContent = "Population: " + towns[i].currentPopulation;

      card.appendChild(pop);

      document.querySelector("div.cards").appendChild(card);

      let rain = document.createElement("p");

      rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;

      card.appendChild(rain);

      document.querySelector("div.cards").appendChild(card);

      let image = "images/preston.jpg";

      //document.createElement("img");

      // image.setAttribute("src", towns[i].photo);

      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  });
