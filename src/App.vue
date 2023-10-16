<template>
  <div class="search-style">
    <div ><h1 class="search-text">Searc Some Place</h1></div><br>
    <div class="search-box">
      <input
      type="text"
      class="search-bar"
      placeholder="Chiang mai?"
      v-model="query"
      @keypress="fetchWeather"
      />
    </div>
    <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div> 
      </div>
      
      <div></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {

    return {
      api_key: "f3563a1c254c38667eb5e4f6e1ae6f32",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  },
};


</script>

<style>


.search-text{
  color: black;
  font-family: cursive;
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.search-style {
  width: 100%;
  max-width: 600px;
  background: rgba(219, 219, 219, 0.596);
  border-radius: 11px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 350px;
  box-shadow: 10px 10px 30px;
}


.search-box .search-bar {
  display: block;
  width: 550px;
  padding: 15px;
  color: #0000006e;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.377);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  font-family: cursive;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
  font-family: cursive;
}

.location-box .location {
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}

.location-box .date {
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: rgb(0, 0, 0);
  font-size: 95px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  margin: 30px 0px;
}

.weather-box .weather {
  color: rgb(0, 0, 0);
  font-size: 40px;
  font-weight: bold;
}
</style>