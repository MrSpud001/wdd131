const temperature = 11;
const windSpeed = 8.4;

const calculateWindchill = (temp, wind_speed) =>
  13.12 +
  0.6215 * temp -
  11.37 * Math.pow(wind_speed, 0.16) +
  0.3965 * temp * Math.pow(wind_speed, 0.16);

const windChillElement = document.querySelector("#windchill");

if (temperature < 10 && windSpeed > 4.8) {
  windChillElement.innerHTML = `Windchill: ${calculateWindchill()}`;
}
