
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Product {
    __typename?: 'Product';
    upc: string;
    name: string;
    price?: Nullable<number>;
}

export abstract class IQuery {
    abstract topProducts(first?: Nullable<number>): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract product(upc?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
