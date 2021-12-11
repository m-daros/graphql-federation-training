import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

const logger = new Logger ( 'ProductService' );

async function bootstrap () {

  const httpPort = 4000;
  const app = await NestFactory.create ( AppModule );
  await app.listen ( httpPort );

  Logger.log ( `ProductService - NestJS started and listening on port ${httpPort}` );
}

bootstrap ();
