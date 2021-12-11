import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { CreateReviewInput, Product, Review, UpdateReviewInput } from "../../generated/graphql-generated";
import { Logger } from "@nestjs/common";

@Resolver ( 'Review' )
export class ReviewsResolver {

  private logger = new Logger ( 'ReviewsResolver' );

  constructor ( private readonly reviewsService: ReviewsService ) {

  }

  @Mutation ( 'createReview' )
  create ( @Args ( 'createReviewInput' ) createReviewInput: CreateReviewInput ) {

    this.logger.log ( `create ( createReviewInput: ${JSON.stringify ( createReviewInput )} )` );

    return this.reviewsService.create ( createReviewInput );
  }

  @Query ( 'reviews' )
  findAll () {

    this.logger.log ( `findAll ()` );

    return this.reviewsService.findAll ();
  }

  @Query ( 'review' )
  findOne ( @Args ( 'id' ) id: string ) {

    this.logger.log ( `findOne ( id: ${id} )` );

    return this.reviewsService.findOne ( id );
  }

  @Mutation ( 'updateReview' )
  update ( @Args ( 'updateReviewInput' ) updateReviewInput: UpdateReviewInput ) {

    this.logger.log ( `update ( updateReviewInput: ${JSON.stringify ( updateReviewInput )} )` );

    return this.reviewsService.update ( updateReviewInput.id, updateReviewInput );
  }

  @Mutation ( 'removeReview' )
  remove ( @Args ( 'id' ) id: string ) {

    this.logger.log ( `remove ( id: ${id} )` );

    return this.reviewsService.remove ( id );
  }

  // ADDED
  @ResolveField ( 'product' )
  product ( @Parent () review: Review ): any {

    // TODO ADDED
    this.logger.log ( `product ( ${JSON.stringify ( review )} )` );

    return { __typename: 'Product', upc: review.product.upc };
  }

  // ADDED
  @ResolveField ( 'author' )
  author ( @Parent () review: Review ): any {

    // TODO ADDED
    this.logger.log ( `author ( ${JSON.stringify ( review )} )` );

    return { __typename: 'User', id: review.author.id };
  }
}
