import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module ( {

  imports: [

    GraphQLGatewayModule.forRoot ( {
      server: {

        // ... Apollo server options
        cors: true,
      },
      gateway: {

        serviceList: [

          { name: 'reviews', url: 'http://localhost:3000/graphql' },
          { name: 'products', url: 'http://localhost:4000/graphql' },
          { name: 'users', url: 'http://localhost:5000/graphql' }
        ]
      }
    } )
  ]
} )
export class AppModule {}
