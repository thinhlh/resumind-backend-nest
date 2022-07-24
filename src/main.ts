import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { CustomExceptionFilter } from './config/filters/exception.filter';
import { ErrorResponseInterceptor } from './config/interceptors/error-response.interceptor';
import { ResponseInterceptor } from './config/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await appConfig(app);
}

async function appConfig(app: INestApplication) {
  app.setGlobalPrefix("/api");

  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new ErrorResponseInterceptor()
  );
  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(3000);
}


bootstrap();
