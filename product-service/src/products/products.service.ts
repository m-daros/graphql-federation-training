import { Injectable, Logger } from "@nestjs/common";
import { Product } from "../../generated/graphql-generated";

@Injectable ()
export class ProductsService {

  private logger = new Logger ( 'ProductsService' );

  private products: Map<string, Product>;

  constructor () {

    this.products = new Map<string, Product> ();
    this.products.set ( 'pr-0001', { upc: 'pr-0001', name: 'Product 1', price: 10 } as Product );
    this.products.set ( 'pr-0002', { upc: 'pr-0002', name: 'Product 2', price: 20 } as Product );
  }

  findById ( upc: string ) {

    // TODO TMP
    this.logger.log ( `findById ( ${upc} )` );

    return this.products.get ( upc );
  }
}