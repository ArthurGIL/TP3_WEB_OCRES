// Fonction appelée lors du click du bouton et au lancement de la page
function launch() {
  start();
  getThreeDayForecast();
}

function start() {
  //initialisation de city
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function getThreeDayForecast(){
  //initialisation de city
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather3Day = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather3Day  
    .fetchThreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information pour le j+1
      const main1 = data.list[0].weather[0].main;
      const description1 = data.list[0].weather[0].description;
      const temp1 = data.list[0].temp.day;
      const icon1 = apiWeather3Day.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      // Modifier le DOM
      document.getElementById('1d-forecast-main').innerHTML = main1;
      document.getElementById('1d-forecast-more-info').innerHTML = description1;
      document.getElementById('1d-icon-weather-container').innerHTML = icon1;
      document.getElementById('1d-forecast-temp').innerHTML = `${temp1}°C`;


      // On récupère l'information pour le j+2
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].temp.day;
      const icon2 = apiWeather3Day.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      // Modifier le DOM
      document.getElementById('2d-forecast-main').innerHTML = main2;
      document.getElementById('2d-forecast-more-info').innerHTML = description2;
      document.getElementById('2d-icon-weather-container').innerHTML = icon2;
      document.getElementById('2d-forecast-temp').innerHTML = `${temp2}°C`;



      // On récupère l'information pour le j+3
      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const temp3 = data.list[2].temp.day;
      const icon3 = apiWeather3Day.getHTMLElementFromIcon(data.list[2].weather[0].icon);
      // Modifier le DOM
      document.getElementById('3d-forecast-main').innerHTML = main3;
      document.getElementById('3d-forecast-more-info').innerHTML = description3;
      document.getElementById('3d-icon-weather-container').innerHTML = icon3;
      document.getElementById('3d-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
