
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateReviewInput {
    id?: Nullable<string>;
    body?: Nullable<string>;
}

export class UpdateReviewInput {
    id?: Nullable<string>;
    body?: Nullable<string>;
}

export class Review {
    __typename?: 'Review';
    id: string;
    body?: Nullable<string>;
    author?: Nullable<User>;
    product?: Nullable<Product>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract reviews(): Nullable<Review>[] | Promise<Nullable<Review>[]>;

    abstract review(id: string): Nullable<Review> | Promise<Nullable<Review>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createReview(createReviewInput: CreateReviewInput): Review | Promise<Review>;

    abstract updateReview(updateReviewInput: UpdateReviewInput): Review | Promise<Review>;

    abstract removeReview(id: string): Nullable<Review> | Promise<Nullable<Review>>;
}

export class User {
    id: string;
    reviews?: Nullable<Nullable<Review>[]>;
}

export class Product {
    upc: string;
    reviews?: Nullable<Nullable<Review>[]>;
}

type Nullable<T> = T | null;
