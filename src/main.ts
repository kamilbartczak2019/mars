import * as dotEnv from 'dotenv'
dotEnv.config()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3001);
}
bootstrap();
