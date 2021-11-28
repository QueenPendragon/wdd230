const wind = parseFloat(document.getElementById('wind').textContent);
//console.log(wind);
const temp = parseFloat(document.getElementById('temp').textContent);
//console.log(temp);

let chill = 35.74 + (0.615 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
chill = Math.round(chill);
//console.log(chill);


if (temp <= 50 && wind > 3) {
    document.getElementById('chill').textContent = chill;
} else {
    document.getElementById('chill').textContent = "N/A";
}

