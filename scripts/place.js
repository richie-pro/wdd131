const today = new Date();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 8;
const windSpeed = 12;
const windChill = document.getElementById("windchill");

function calculateWindChill(temp, speed) { return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16; }

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${Math.round(calculateWindChill(temperature, windSpeed))} °C`;
} else {
    windChill.textContent = "N/A";
}