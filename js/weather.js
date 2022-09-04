const API_KEY = "3a286ad0dd36aae6f6d8a4987ace127a"

//위치정보 로드 성공
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
};

//위치정보 로드 실패
function onGeoError() {
    alert("위치정보를 찾을 수 없습니다.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);