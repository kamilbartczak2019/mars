import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("latestWeather")
  getLatestWeather(){
    return this.appService.getLatestWeather();
  }

  @Get("APOD/:day")
  getAPOD(@Param('day') date:string){
    return this.appService.getAPOD(date);
  }

  @Get("Gallery")
  getMarsPhotos(@Query() queries:{}){
    return this.appService.getMarsPhotos(queries)
  }
}
