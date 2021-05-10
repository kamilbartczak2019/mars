<template>
  <p class="terrestial-date">
    Terrestrial Date: {{weather && weather.terrestrial_date}}, SOL: {{ weather && weather.sol }}
  </p>
</template>

<script>
export default {
    props: {
        weather: {
            default: () => {sol: {terrestial_date: "Loading"}}
        }
    }
};
</script>

<style lang="scss" scoped>
.terrestial-date {
  letter-spacing: 1.7px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>