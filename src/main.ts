import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await appConfig(app);
}

async function appConfig(app: INestApplication) {
  await app.listen(3000);
}


bootstrap();
