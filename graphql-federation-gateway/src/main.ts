import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

const logger = new Logger ( 'FederationGatewayService' );

async function bootstrap () {

  const httpPort = 7000;
  const app = await NestFactory.create ( AppModule );
  await app.listen ( httpPort );

  Logger.log ( `FederationGatewayService - NestJS started and listening on port ${httpPort}` );
}

bootstrap ();
