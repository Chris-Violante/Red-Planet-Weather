export function getCurWeatherByLatLng(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=4507ec27b0a5b32877e856da0ceca6c9`, {mode: 'cors'}).then(res => res.json())
 }