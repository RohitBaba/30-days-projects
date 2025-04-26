

const apiKey = "555a30f24957be38c3dc9607c7dbb3b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-input")
const searchBtn = document.querySelector("#search-button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const responce = await fetch(apiUrl +city+ `&appid=${apiKey}`);
if(responce.status == 404) {
    // document.querySelector(".weather").style.display = "none";
alert("invalid")

}else {
    document.querySelector(".weather").style.display = "block";
    
}

    var data = await responce.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";




if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "\weather-images/clouds.png"
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src =  "/weather-images/clear.png";
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "/weather-images/rain.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "/weather-images/drizzle.png";
}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "/weather-images/mist.png";
}
document.querySelector(".weather").style.display = "block";
// document.querySelector(".error").style.display = "block";

}





searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

