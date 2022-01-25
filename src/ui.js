import weather from "./weather";

let domHandler = (() => {
  let location = document.querySelector("#location");
  let searchBtn = document.querySelector("#search-icon");

  let city = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let details = document.querySelectorAll(".details");

  let getLocation = () => {
    return location.value;
  };

  let updateContent = (data) => {
    city.textContent = data.name;
    temperature.textContent = data.temperature + " °F";
    details[0].textContent = data.feelsLike + " °F";
    details[1].textContent = data.weather;
    details[2].textContent = data.humidity;
    details[3].textContent = data.windSpeed;
  };

  location.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      searchBtn.click();
    }
  });

  searchBtn.addEventListener("click", () => {
    let location = getLocation();
    if (location) {
      weather.getWeather(location).then((data) => {
        updateContent(data);
      });
    }
  });

  let initialize = (location) => {
    weather.getWeather(location).then((data) => updateContent(data));
  };

  return { initialize };
})();

export default domHandler;
