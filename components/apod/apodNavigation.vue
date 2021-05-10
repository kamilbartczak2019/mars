<template>
  <div class="navigation">
    <img
      class="arrowIcon"
      src="~/assets/arrowLeft.svg"
      alt="arrow left"
      @click="$emit('past', 1)"
    />
    <p :data-date="parseDate">Astronomy picture of the day {{parseDate}}</p>
    <img
      class="arrowIcon"
      src="~/assets/arrowRight.svg"
      alt="arrow right"
      v-if="!(selectedDate >= today)"
      @click="$emit('past', -1)"
    />
  </div>
</template>

<script>
export default {
    props: {
        parseDate: {
            required: true,
            type: String,
            default: "Loading"
        },
        today: {
            required: true,
            type: Number,
            default: 0
        },
        selectedDate: {
            required: true,
            default: 0
        }
    }
};
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .arrowIcon {
      height: 25px;
      padding: 0px 15px;
      box-sizing: content-box;
      cursor: pointer;
    }
    .arrowIcon:first-child {
      padding-left: 0;
    }
    .arrowIcon:last-child {
      padding-right: 0;
    }
    p {
      font-size: 18px;
      font-weight: 700;
      position: relative;

      &::before {
        content: attr(data-date);
        font-size: 12px;
        top: -15px;
        font-weight: 500;
        color: #ddd;
        position: absolute;
      }
    }
  }
</style>