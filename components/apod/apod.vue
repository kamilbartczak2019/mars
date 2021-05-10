<template>
  <section class="apod">
    <apod-navigation
      :parseDate="parseDate(selectedDate)"
      @past="handlePastChange($event)"
      :selectedDate="selectedDate"
      :today="today"
    />
    <p class="description" v-if="currentAPOD">
        {{ currentAPOD.explanation }}
        <b>&copy; {{ currentAPOD.copyright }}</b>
    </p>
  </section>
</template>

<script>
import axios from "axios";
import apodNavigation from "~/components/apod/apodNavigation.vue";

const unixDay = 86400000;
export default {

  components: { apodNavigation },
  beforeMount() { this.past = 0 },

  data() {

    return {
      past: null,
      today: Date.now(),
      selectedDate: null,
      APODArray: [],
      currentAPOD: null,
    };

  },

  methods: {

    parseDate(unix) {
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

      if (!this.today) this.today = this.currentDate
      return `${year}-${month}-${day}`
    },

    handlePastChange(n) { this.past += n }

  },

  watch: {

    past() {
    this.selectedDate = this.today - this.past * unixDay
    const exists = this.APODArray.find((apod) => apod.date == this.parseDate(this.selectedDate))
      
    if (exists) return (this.currentAPOD = exists)
      
    axios.get(process.env.BASE_URL+"/api/APOD/" + this.parseDate(this.selectedDate))
    .then((apod) => {
        this.APODArray.push(apod.data)
        if (this.parseDate(this.selectedDate) === apod.data.date) this.currentAPOD = apod.data })
    },

    currentAPOD() { this.$emit("apodChange", this.currentAPOD.url) }

  },
};
</script>

<style lang="scss" scoped>
.apod {
  .description {
    font-size: 14px;
    line-height: 20px;
    padding: 0px 30px;
  }
}
</style>