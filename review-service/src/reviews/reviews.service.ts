import { Injectable, Logger } from '@nestjs/common';
import { CreateReviewInput, Review, UpdateReviewInput } from "../../generated/graphql-generated";

@Injectable ()
export class ReviewsService {

  private logger = new Logger ( 'ReviewsService' );

  private reviews = [];

  constructor () {

    // TODO ...
    this.reviews.push ( { id: '1', body: 'the body 1', product: { upc: 'pr-0001' }, author: { id: '1' } } as Review );
    this.reviews.push ( { id: '2', body: 'the body 2', product: { upc: 'pr-0002' }, author: { id: '2' } } as Review );
  }

  async create ( createReviewInput: CreateReviewInput ): Promise<Review> {

    this.logger.log ( `create ( id: ${createReviewInput} )` );

    const toAdd = { id: createReviewInput.id, ...createReviewInput };
    toAdd.id = '' + new Date ().getTime ();

    this.reviews.push ( toAdd );

    return toAdd;
  }

  async findAll (): Promise<Review []> {

    this.logger.log ( 'findAll ()' );

    return this.reviews;
  }

  async findOne ( id: string ): Promise<Review> {

    this.logger.log ( `findOne ( id: ${id} )` );

    return this.reviews.find ( review => review.id === id )
  }

  async update ( id: string, updateReviewInput: UpdateReviewInput ) {

    this.logger.log ( `update ( id: ${id} )` );
//    this.reviews.find ( review => review.id === id )
  }

  async remove ( id: string ) {

    this.logger.log ( `remove ( id: ${id} )` );
//    return `This action removes a #${ id } review`;
  }
}
