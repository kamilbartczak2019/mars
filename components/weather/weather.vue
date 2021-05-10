<template>
  <section class="weather">
    <!-- <weather-navigation :weather="weather" :latestSol="latestSol"/> -->
    
    <weather-terrestial-date :weather="weather"/>
    <weather-temperature :weather="weather"/>
    <weather-pressure :weather="weather"/>

  </section>
</template>

<script>
import axios from "axios"
import weatherPressure from "~/components/weather/weatherPressure.vue"
import WeatherTerrestialDate from "~/components/weather/weatherTerrestialDate.vue"
import WeatherTemperature from "~/components/weather/weatherTemperature.vue"


export default {
  components: {
    weatherPressure,
    WeatherTerrestialDate,
    WeatherTemperature
  },
  async mounted() {
    const latestWeather = await axios.get(process.env.BASE_URL+"/api/latestWeather")
    const { sol } = latestWeather.data
    this.latestSol = sol
    this.currentSol = sol
    this.weatherData.push(latestWeather.data)
  },

  data() {
    return {
      latestSol: null,
      currentSol: null,
      weatherData: [],
    };
  },

  computed: {
    weather() { return this.weatherData.find((sol) => sol.sol === this.currentSol) },
  },
};

</script>
