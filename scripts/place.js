const temp = document.querySelector("#temp");
const con = document.querySelector("#con");
const wind = document.querySelector("#wind");
const windc = document.querySelector("#windc");

let todayTemp = "45";  // Example temperature in Fahrenheit
let todayCon = "Partly Cloudy";
let todayWind = "10";  // Example wind speed in mph

function calculateWindChill(temp, windSpeed) {
  // Wind chill calculation formula for Fahrenheit
  return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

function displayWindChill() {
  const tempValue = parseFloat(todayTemp);
  const windSpeedValue = parseFloat(todayWind);

  // Debugging logs
  console.log("Temperature:", tempValue);
  console.log("Wind Speed:", windSpeedValue);

  if (tempValue <= 50 && windSpeedValue > 3) {
    const windChill = calculateWindChill(tempValue, windSpeedValue);
    windc.innerHTML = `${windChill} °F`;
  } else {
    windc.innerHTML = "N/A";
  }
}

// Set the static values in the HTML
temp.innerHTML = todayTemp;
con.innerHTML = todayCon;
wind.innerHTML = todayWind;

displayWindChill();

