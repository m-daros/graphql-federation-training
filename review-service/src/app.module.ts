import { Module } from '@nestjs/common';
import { ReviewsModule } from './reviews/reviews.module';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module ( {

  imports: [ GraphQLFederationModule.forRoot ( {

      typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join ( process.cwd (), 'generated/graphql-generated.ts' ),
      //   outputAs: 'class',
      // }
  } ), ReviewsModule ]
} )
export class AppModule {}
