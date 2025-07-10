const API_KEY = "4a681026df8f1f3940b5f58a88fe39f2"; 

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city !== "") {
    getWeather(city);
  }
});

function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById("weatherInfo").classList.remove("hidden");
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = Math.round(data.main.temp);
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      alert("Error: " + error.message);
      document.getElementById("weatherInfo").classList.add("hidden");
    });
}
