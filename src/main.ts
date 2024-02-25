import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import 'reflect-metadata';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  const options = new DocumentBuilder()
    .setTitle('Documentation | Best API')
    .setDescription('The Best API documentation')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-key', in: 'header' }, 'x-key')
    .addBearerAuth({ type: 'http', scheme: 'bearer' }, 'authenticate')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}
bootstrap();
