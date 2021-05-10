<template>
  <div class="filters">
    <div class="row">
      <filters-rovers
      @roverClick="handleRoverClick($event)"
      :activeRover="active_rover"
      />
      <filters-date
        @dateChange="handleDateChange($event)"
      />
    </div>
    <div class="row">
      <filters-cameras
      @cameraClear="active_cameras = null"
      @cameraClick="handleCameraClick($event)"
      :activeRover="active_rover"
      :availableCameras="ActiveRoverCameras"
      :activeCameras="active_cameras"
      />
    </div>
  </div>
</template>

<script>
import filtersRovers from "~/components/gallery/filters/filtersRovers.vue";
import filtersCameras from "~/components/gallery/filters/filtersCameras.vue";
import filtersDate from "~/components/gallery/filters/filtersDate.vue";
export default {
  components: {
    filtersRovers,
    filtersCameras,
    filtersDate
  },
  data(){
      return {
          rovers: [
              {
                  name: "Curiosity",
                  cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]
              },{
                  name: "Opportunity",
                  cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
              },{
                  name: "Spirit",
                  cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
              }
          ],
          active_rover: "Curiosity",
          active_cameras: null,
          date: null
      }
  },
  watch: {
      active_rover(){ this.emitFilters() },
      active_cameras(){ this.emitFilters() },
      date(){ this.emitFilters() }
  },
  computed: {
      ActiveRoverCameras(){ 
          if(this.active_rover) return new Set(this.rovers.find(rover => rover.name === this.active_rover).cameras)
          let allCameras = new Array()
          this.rovers.forEach(rover => allCameras = allCameras.concat(rover.cameras))
          return new Set(allCameras)
      }
  },
  methods: {
      emitFilters(){
          this.$emit("filtersChange", {rover: this.active_rover, camera: this.active_cameras, date: this.date})
      },
      handleCameraClick(e){
          if(this.active_cameras == e) return this.active_cameras = null
          this.active_cameras = e
      },
      handleRoverClick(e){
          this.active_rover = e
          this.handleCameraClick("SANITAZE")
      },
      handleDateChange(e){
          this.date = e
      }
  }
};
</script>

<style lang="scss" scoped>
.filters {
  width: 100%;
  .row {
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-gap: 30px;
    margin-bottom: 20px;
    .date {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>