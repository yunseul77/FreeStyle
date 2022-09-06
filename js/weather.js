const API_KEY = "3a286ad0dd36aae6f6d8a4987ace127a"

//위치정보 로드 성공
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather p:first-child")
        const weather = document.querySelector("#weather p:last-child")
        city.innerText = data.name;
        weather.innerText = `/ ${data.weather[0].main} ${Math.round(data.main.temp)}ºC`;
    });
};

//위치정보 로드 실패
function onGeoError() {
    const errorMsg = document.querySelector("#weather p:first-child")
    errorMsg.innerText = "위치정보를 찾을 수 없습니다."
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);