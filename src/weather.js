let weather = (() => {
  let apiKey = "d9f7ecce0fe14652d86845b06833e3ff";

  let processData = (data) => {
    let name = data.name;
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let country = data.sys.country;
    let weather = data.weather[0].description;
    let windSpeed = data.wind.speed;

    return {
      name,
      country,
      weather,
      temperature,
      feelsLike,
      humidity,
      windSpeed,
    };
  };

  let getWeather = (location) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.table(processData(data));
      })
      .catch((err) => console.log("Error: " + err));
  };

  return { getWeather };
})();

export default weather;
