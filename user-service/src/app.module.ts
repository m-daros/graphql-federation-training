import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module ( {

  imports: [ GraphQLFederationModule.forRoot ( {

    typePaths: ['./**/*.graphql'],
    // definitions: {
    //   path: join ( process.cwd (), 'generated/graphql-generated.ts' ),
    //   outputAs: 'class',
    // }
  } ), UsersModule ]
} )
export class AppModule {}
