<template>
  <div class="container">
    <img :src="apodURL" :key="apodURL" data-toggle="tooltip" data-placement="bottom" title="goTop">
    <weather />
    <gallery/>
    <apod @apodChange="changeAPOD($event)"/>
  </div>
</template>

<script>
import weather from "~/components/weather/weather.vue"
import apod from "~/components/apod/apod.vue"
import gallery from "~/components/gallery/gallery.vue"
export default {
  components: { weather, apod, gallery },
  data(){
    return{
      apodURL: null
    }
  },
  methods: {
    changeAPOD(e){ this.apodURL = e } 
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #000;
  padding: 60px;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  grid-gap: 30px;
  *{
    z-index: 2;
  }
  img {
    filter: brightness(30%);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .apod {
    grid-column: -1/1;
  }
}
</style>
