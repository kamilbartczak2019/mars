<template>
  <div class="container" @click="fetchPhotos">
      <div class="photos" v-if="photos">
           <img v-for="photo in photos" :key="photo.id" :src="photo.img_src" :tabindex="photo.id"/>
      </div>
      <h1 v-if="photos && photos.length == 0">No data...</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    watch:{
        filters(){
            this.fetchPhotos()
        }
    },
    props: {
        filters: {
            type: Object
        }
    },
    data(){
        return {
            cancelToken: null,
            photos: null
        }
    },
    methods: {
        async fetchPhotos(){
            try{
            if(this.cancelToken) this.cancelToken.cancel()
            this.cancelToken = null
            this.cancelToken = axios.CancelToken.source();
            const rover = "rover="+this.filters.rover
            const date = "date="+this.filters.date
            const camera = this.filters.camera ? "&camera="+this.filters.camera : ""
            const url = `${process.env.BASE_URL}/api/Gallery?${rover}&${date}&page=1${camera}`
            const data = await axios.get(url,
            {cancelToken: this.cancelToken.token, headers: {"content-type": "application/json"}})
            console.log(data.data)
            this.photos = data.data.photos.splice(0, 12)
            }catch(err){console.log(err)}
        },
    }
}
</script>

<style lang="scss" scoped>
    .container{
        height: 100%;
        .photos{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
            grid-gap: 20px;
            img{
                background-color: grey;
                width: 100%;
                height: 100px;
                object-fit: cover;
                transition: 0.5s ease all;
                position: relative;
                right: 0px;
                cursor: pointer;
                &:hover{
                    z-index: 999;
                    transform: scale(3);
                right: 60px;
                }
            }
        }
    }
</style>