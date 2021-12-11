import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from "../../generated/graphql-generated";
import { Logger } from "@nestjs/common";

@Resolver ( 'Product' )
export class ProductsResolver {

  private logger = new Logger ( 'ProductsResolver' );

  constructor ( private readonly productService: ProductsService ) {

  }

  @Query ()
  async topProducts ( @Args ( 'first' ) first: number ): Promise<Product []> {

    // TODO ...
    this.logger.log ( `topProducts ( first: ${first} )` );

    // TODO ..
    const product1 = { upc: 'prod-00001', name: 'Product 1', price: 2340 } as Product;
    const product2 = { upc: 'prod-00002', name: 'Product 2', price: 2760 } as Product;

    return [ product1, product2 ];

    // TODO Invoke service
  }

  @Query ()
  async product ( @Args ( 'upc' ) upc: string ) {

    this.logger.log ( `product ( upc: ${upc} )` );

    return this.productService.findById ( upc );
  }

  @ResolveReference ()
  resolveReference ( reference: { __typename: string; upc: string } ) {

    this.logger.log ( `resolveReference ( reference: ${JSON.stringify ( reference )} )` );

    return this.productService.findById ( reference.upc );
  }
}
