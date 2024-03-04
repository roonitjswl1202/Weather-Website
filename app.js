const apiKey = "1a516f07f6ec5434d4abc5344a1b1571";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);
     
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
     
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://www.shareicon.net/data/512x512/2016/07/22/799894_cloud_512x512.png";
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/831/831682.png";
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png";
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-29-1024.png";
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "https://www.pngall.com/wp-content/uploads/2017/03/Mist-PNG.png";
        }
    
    

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}   

    

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);  
})