import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Swagger configuration
  // const config = new DocumentBuilder()
  //   .setTitle('My NestJS API')
  //   .setDescription('API documentation with Swagger')
  //   .setVersion('1.0')
  //   .addBearerAuth() // Optional: Adds JWT auth support in Swagger UI
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
