import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { filters } from './common/filters/index.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(...filters);
  app.enableCors();
  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
