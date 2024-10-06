const search=document.querySelector('.search_img')
const input=document.querySelector('.input_value')
const temp=document.querySelector('.temp')
const city=document.querySelector('.city')
const humidity=document.querySelector('.humidity')
const wind=document.querySelector('.wind')


function fetchWeatherData(cityName){
const apikey="22f0189b8a264eb2a6753639240310"
const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&aqi=no`;
fetch(url)
.then(res=>res.json())
.then((data)=>{

temp.textContent=`${Math.round(data.current.temp_c)}°C`;
city.textContent=`${data.location.name}, ${data.location.region}`
humidity.textContent=`${data.current.humidity}%`
wind.textContent=`${data.current.wind_kph}km/h`
})
.catch(err => console.log(`Error in weather app: ${err}`))
}

search.addEventListener('click',()=>{
   let cityName=input.value.trim()
   if(!cityName){
    cityName="Mumbai"
   }
  fetchWeatherData(cityName)
})
fetchWeatherData("Mumbai");
