<template>
  <section>
    <gallery-header/>
    <gallery-filters @filtersChange="filters = $event"/>
    <gallery-photos :filters="filters"/>
  </section>
</template>

<script>
import galleryHeader from './galleryHeader.vue'
import galleryFilters from './galleryFilters.vue'
import galleryPhotos from './galleryPhotos.vue'
export default {
    data() {
      return {
        filters: null
      }
    },
    components: {
        galleryHeader,
        galleryFilters,
        galleryPhotos
    }

}
</script>

<style lang="scss" scoped>
    section{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>