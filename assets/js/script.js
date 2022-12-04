const apiKey = "8caa3e1b07663a00accf703a779c01e1";
const apiCountryURL = "http://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');


const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=eng`;

    const res = await  fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
}

const showWeatherData = (city) => {
    getWeatherData(city);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})
