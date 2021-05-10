<template>
  <div>
    <div class="rovers">
      <div :class="{active: activeRover == 'Curiosity', rover: true}" @click="handleClick($event.target.innerText)">Curiosity</div>
      <div :class="{active: activeRover == 'Opportunity', rover: true}" @click="handleClick($event.target.innerText)">Opportunity</div>
      <div :class="{active: activeRover == 'Spirit', rover: true}" @click="handleClick($event.target.innerText)">Spirit</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        activeRover: {
            type: String,
            default: null,
        }
    },
    methods: {
        handleClick(rover) {this.$emit("roverClick", rover)}
    }
};
</script>

<style lang="scss" scoped>
.rovers {
  display: flex;
  width: 100%;
  color: #ccc;
  .rover:nth-child(n + 2) {
    margin-left: 35px;
  }
}
.active{
    font-weight: 700;
    color: #fff;
}
</style>