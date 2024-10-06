const search=document.querySelector('.search_img')
const input=document.querySelector('.input_value')
const temp=document.querySelector('.temp')
const city=document.querySelector('.city')
const humidity=document.querySelector('.humidity')
const wind=document.querySelector('.wind')
const image=document.querySelector('.weather_img')


const weatherIcons = {
  clear: './clear.png',
  sunny: './clear.png',
  cloudy: './clouds.png',
  overcast: './clouds.png',
  mist: './mist.png',
  drizzle: './drizzle.png',
  rain: './rain.png',
  snow: './snow.png',
  thunderstorm: './storm.png',
  sleet: './sleet.png',
  haze: './haze.png',
  fog: './mist.png',
  windy: './wind.png',
  blizzard: './blizzard.png',
  // Add more mappings as needed
};

// Function to normalize and map condition to an image
function getWeatherIcon(conditionText) {
  const normalizedCondition = conditionText.toLowerCase();
  
  // Check for key phrases in the condition text and return corresponding icon
  if (normalizedCondition.includes("clear")) {
    return weatherIcons.clear;
  } else if (normalizedCondition.includes("cloudy")) {
    return weatherIcons.cloudy;
  } else if (normalizedCondition.includes("mist")) {
    return weatherIcons.mist;
  } else if (normalizedCondition.includes("drizzle")) {
    return weatherIcons.drizzle;
  } else if (normalizedCondition.includes("rain")) {
    return weatherIcons.rain;
  } else if (normalizedCondition.includes("snow")) {
    return weatherIcons.snow;
  } else if (normalizedCondition.includes("thunderstorm")) {
    return weatherIcons.thunderstorm;
  } else if (normalizedCondition.includes("sleet")) {
    return weatherIcons.sleet;
  } else if (normalizedCondition.includes("haze")) {
    return weatherIcons.haze;
  } else if (normalizedCondition.includes("fog")) {
    return weatherIcons.fog;
  } else if (normalizedCondition.includes("wind")) {
    return weatherIcons.windy;
  } else if (normalizedCondition.includes("blizzard")) {
    return weatherIcons.blizzard;
  } else {
    // Default icon for any unhandled weather conditions
    return './default.png';
  }
}





function fetchWeatherData(cityName){
const apikey="22f0189b8a264eb2a6753639240310"
const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&aqi=no`;
fetch(url)
.then(res=>res.json())
.then((data)=>{
  console.log(data.current.condition.text);

temp.textContent=`${Math.round(data.current.temp_c)}°C`;
city.textContent=`${data.location.name}, ${data.location.region}`
humidity.textContent=`${data.current.humidity}%`
wind.textContent=`${data.current.wind_kph}km/h`

const weatherIcon = getWeatherIcon(data.current.condition.text);
image.src = weatherIcon;
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
