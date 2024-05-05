const weather = document.querySelector('.user-weather')
const userLocation = document.querySelector('.user-location')
const API_KEY = 'e5468b6659de2009afd12c438d7083bc'

const geoSuccess = (position) => {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userLocation.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
const geoError = (error) => {
  alert('Error occurred. Error code: ' + error.code)
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
