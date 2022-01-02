import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { UserModule } from './app/user/user.module';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Notes todo app')
    .setDescription('A documentation for notes')
    .setVersion('1.0')
    .addTag('User', 'Hola')
    .build();
  const appDocument = SwaggerModule.createDocument(app, options, {
    include: [UserModule],
  });
  SwaggerModule.setup('api/v1', app, appDocument);
  await app.listen(PORT);
}
bootstrap();
