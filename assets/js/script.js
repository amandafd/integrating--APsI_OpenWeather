const apiKey = "8caa3e1b07663a00accf703a779c01e1";
const apiCountryURL = "http://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
})
