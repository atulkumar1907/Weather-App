const apiKey = "16a93188b7cb2e46ae7cdb96c1c656fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');
const error = document.querySelector('.error');

async function checkWeather(find){
    const response = await fetch(`${apiUrl}+ ${find}+&appid=${apiKey}`);

    if(response.status == 404){
        error.style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }

    const data = await response.json();
     
    const Temp = data.main.temp;
    const humid = data.main.humidity;
    const city = data.name;
    const Wind = data.wind.speed;

    // console.log(data);

    document.querySelector('.city').innerHTML = city;
    document.querySelector('.temp').innerHTML = Math.ceil(Temp) + '°C';
    document.querySelector('.humidity').innerHTML = humid + '%';
    document.querySelector('.wind').innerHTML = Wind + "km/hr";

    const weather = data.weather[0].main;

    if(weather == "Clouds"){
        weatherIcon.src = 'images/clouds.png';
    }
    else if(weather == "Clear"){
        weatherIcon.src = 'images/clear.png';
    }
    else if(weather == "Rain"){
        weatherIcon.src = 'images/rain.png';
    }
    else if(weather == "Mist"){
        weatherIcon.src = 'images/mist.png';
    }
    else if(weather == "Drizzle"){
        weatherIcon.src = 'images/drizzle.png';
    }

    document.querySelector('.weather').style.display = 'block';
    error.style.display = 'none';

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

