<template>
  <div class="dateContainer">
      <img class="arrowIcon" src="~/assets/arrowLeft.svg" alt="arrow left icon" @click="past = past + 1">
      <span class="date">{{parsedDate}}</span>
      <img class="arrowIcon" src="~/assets/arrowRight.svg" alt="arrow right icon" @click="past = past - 1" v-if="past >=! 0">
  </div>
</template>

<script>
const unixDay = 86400000;
export default {
    created(){
        this.parsedDate = this.parseDate(this.today - (this.past * unixDay))
        this.$emit("dateChange", this.parseDate(this.today - (this.past * unixDay)))
    },
    data(){
        return {
            today: Date.now() - 86400000,
            parsedDate: "loading",
            past: 0
        }
    },
    methods: {
        parseDate(unix){
            const date  = new Date(unix)
            const year  = date.getFullYear()
            const month =
                            (date.getMonth() + 1).toString().length === 1
                            ? "0" + (date.getMonth() + 1).toString()
                            : date.getMonth() + 1
            const day =
                            date.getDate().toString().length === 1
                            ? "0" + date.getDate().toString()
                            : date.getDate()
            return `${year}-${month}-${day}`
        }
    },
    watch: {
        past(){
            this.$emit("dateChange", this.parseDate(this.today - (this.past * unixDay)))
            this.parsedDate = this.parseDate(this.today - (this.past * unixDay))
        }
    }
}
</script>

<style lang="scss" scoped>
    .dateContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .arrowIcon{
            cursor: pointer;
        }
    }
</style>