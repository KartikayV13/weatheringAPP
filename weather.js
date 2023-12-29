const containers = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const body = document.querySelector(".body");

const image = document.querySelector(".weather-box img");
const temprature = document.querySelector(".weather-box .temprature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".weather-details .humidity span");
const wind = document.querySelector(".weather-details .wind span");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "303f958adae986cc31d5bd2e79820a16";
  const city = document.querySelector(".search-box input").value;

  if (city === "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.cod === "404") {
        containers.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
      }

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "image/clear.png";
          document.body.style.backgroundImage =
            "url(https://media3.giphy.com/media/RlHpuVwtbvdIBXzm2z/giphy.gif?cid=ecf05e470fgppke0vjdjvvvqld8fmwtgfh1g67a491rhnyen&ep=v1_gifs_related&rid=giphy.gif&ct=g)";

          break;
        case "Rain":
          image.src = "image/rain.png";
          document.body.style.backgroundImage =
            "url(https://media2.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif?cid=ecf05e47sqgku3vsch2rezpw8d5mc306azq8hagvh2u3wguw&ep=v1_gifs_related&rid=giphy.gif&ct=g)";
          break;
        case "Snow":
          image.src = "image/snow.png";
          document.body.style.backgroundImage =
            "url(https://media2.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif?cid=ecf05e477sl15thf3ib6bbl4mtzipuxa3f25k27stvhvd68f&ep=v1_gifs_search&rid=giphy.gif&ct=g)";
          break;
        case "Haze":
          image.src = "image/haze.png";
          document.body.style.backgroundImage =
            "url(https://media0.giphy.com/media/dgeIH5RPynA6Q/giphy.gif?cid=ecf05e47fkyiqp77o87a1358opuse2wqlykby4x7egcyzzaq&ep=v1_gifs_search&rid=giphy.gif&ct=g)";
          break;
        case "Clouds":
          image.src = "image/cloud.png";
          document.body.style.backgroundImage =
            "url(https://media4.giphy.com/media/lOkbL3MJnEtHi/giphy.gif?cid=ecf05e47bhxcq3mfmyv8mwasoc1t0cqcwsnyhtjrzyr7fvmz&ep=v1_gifs_related&rid=giphy.gif&ct=g)";
          break;
        case "Smoke":
          image.src = "image/smoke.png";
          document.body.style.backgroundImage =
            "url(https://media2.giphy.com/media/ZrkQwhGK9j0tLQkN0m/giphy.gif?cid=ecf05e479p9zg8rotzztd6x1iy55hl2aerpz9uylfxgrpz3o&ep=v1_gifs_related&rid=giphy.gif&ct=g)";
          break;
        case "Fog":
          image.src = "image/fog.jpg";
          document.body.style.backgroundImage =
            "url(https://media4.giphy.com/media/26xBwlGgyeQjxx09G/giphy.gif?cid=ecf05e47x90tgrojdbyvep8t1bbohcse301gtfk4nzchvsh6&ep=v1_gifs_related&rid=giphy.gif&ct=g)";
          break;
        default:
          image.src = "";
      }
      temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      console.log(json.weather[0].description);
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";

      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      containers.style.height = "670px";
    });
});
