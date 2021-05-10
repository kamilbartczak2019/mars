import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import weatherModel from "./weather.schema"
import axios from "axios"

@Injectable()
export class AppService {

  async getLatestWeather(){
    const weatherDatabase = await weatherModel.find().sort({sol: -1})
    return weatherDatabase[0]
  }
  
  async getAPOD(date:string){
    try{
      const APOD = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=1JOjeHTuxBtlMjXSJpNNikt2n15HNJCjtjEd3b6a`)
      return APOD.data
    }catch(err){
      return 404
    }
  }

  async getMarsPhotos(queries){
    interface Filters{
      camera: string,
      date: string,
      rover: string,
      page: number
    }
    const fillters: Filters = queries
    let url:string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${fillters.rover}/photos?earth_date=${fillters.date}&page=${fillters.page}&api_key=${process.env.KEYNASA}`
    if(fillters.camera) url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${fillters.rover}/photos?earth_date=${fillters.date}&page=${fillters.page}&camera=${fillters.camera}&api_key=${process.env.KEYNASA}` 
    const photos = await axios.get(url)
    return photos.data
  }

  @Cron('* * 8 * * *')
  async handleCron(){
    const weather = await axios.get("https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json")
    new weatherModel(weather.data.soles[0])
    .save((err, item) => {
      if(err) console.log("no new weather data!")
      else console.log("New weather data was fetched!")
    })
  }
}
