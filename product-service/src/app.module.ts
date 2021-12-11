import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ProductsModule } from "./products/products.module";

@Module ( {

  imports: [ GraphQLFederationModule.forRoot ( {

    typePaths: ['./**/*.graphql'],
    // definitions: {
    //   path: join ( process.cwd (), 'generated/graphql-generated.ts' ),
    //   outputAs: 'class',
    // }
  } ), ProductsModule ]
} )
export class AppModule {}
