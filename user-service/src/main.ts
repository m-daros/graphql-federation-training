import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

const logger = new Logger ( 'UserService' );

async function bootstrap () {

  const httpPort = 5000;
  const app = await NestFactory.create ( AppModule );
  await app.listen ( httpPort );

  Logger.log ( `UserService - NestJS started and listening on port ${httpPort}` );
}

bootstrap ();
