import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const APP_PORT = 3331;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}
bootstrap();
