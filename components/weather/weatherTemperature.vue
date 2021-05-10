<template>
  <div class="temp-container">
      <img src="~/assets/weatherIcon.svg" alt="Mars Weatcher Icon" />
      <div class="weather">
        <h2 class="minTemp">
          MAX <span v-if="weather"> {{weather && weather.max_temp }}°C</span>
        </h2>
        <h2 class="maxTemp">
          MIN <span v-if="weather"> {{weather && weather.min_temp }}°C</span>
        </h2>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        weather: {
            default: () => {max_temp: "---"}
        }
    }
}
</script>

<style lang="scss" scoped>
.temp-container {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 15px;
  margin-bottom: 20px;
  h2 {
    display: flex;
    width: 250px;
    font-size: 44px;
    justify-content: space-between;
    span {
      font-weight: 400;
    }
  }
}
</style>