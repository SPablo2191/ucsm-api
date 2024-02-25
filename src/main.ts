import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import 'reflect-metadata';
import { ApiAuthorizationGuard } from './core/guards/authorization.guard';
import { RolesGuard } from './core/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const PORT = configService.get('PORT') || 3000;
  const reflector = app.get<Reflector>(Reflector);

  app.setGlobalPrefix('api');

  app.useGlobalGuards(
    new ApiAuthorizationGuard(configService),
    new RolesGuard(reflector),
  );

  const options = new DocumentBuilder()
    .setTitle('UCSM API')
    .setDescription(
      'API REST para la Universidad Católica de Santa María (UCSM). Proporciona acceso a varios recursos relacionados con la gestión universitaria, incluyendo información sobre estudiantes, profesores, cursos y más.',
    )
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
