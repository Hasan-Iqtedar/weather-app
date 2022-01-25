let weather = (() => {
  let apiKey = "d9f7ecce0fe14652d86845b06833e3ff";

  let getWeather = (location) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
    console.log(url);
    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error: " + err));
  };

  return { getWeather };
})();

export default weather;
