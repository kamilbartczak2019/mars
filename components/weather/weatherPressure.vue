<template>
  <div class="pressure">
      <img src="~/assets/pressure.svg" alt="Pressure icon" />
      <p>Pressure - <span v-if="weather">{{ weather.pressure }}</span></p>
    </div>
</template>

<script>
export default {
    props: {
        weather: {
            default: () => { pressure: "Loading" }
        }
    }
}
</script>

<style lang="scss" scoped>
    .pressure {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 15px;
  }
  p {
    letter-spacing: 3px;
  }
}
</style>