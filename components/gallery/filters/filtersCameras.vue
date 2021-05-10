<template>
  <div class="cameras" v-if="activeRover">
    <div
    class="camera"
    @click="$emit('cameraClear')"
    >
    All
    </div>
    
    <div 
    v-for="cam in availableCameras"
    :class="{active: cam == activeCameras}"
    :key="cam"
    @click="$emit('cameraClick', cam)"
    >
    {{ cam }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        activeRover: {
            type: String,
            default: null,
        },
        availableCameras: {
            type: Set,
            default: () => []
        },
        activeCameras: {
            type: String,
            default: () => []
        }
    },
};
</script>

<style lang="scss" scoped>
.cameras {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ccc;
  grid-column: -1/1;
  cursor: pointer;
}
.active{
    color: #fff;
    font-weight: 700;
}
</style>