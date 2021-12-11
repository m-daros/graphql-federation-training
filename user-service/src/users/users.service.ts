import { Injectable, Logger } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from "../../generated/graphql-generated";

@Injectable ()
export class UsersService {

  private logger = new Logger ( 'UsersService' );

  private users: Map<string, User>;

  constructor () {

    this.users = new Map<string, User> ();
    this.users.set ( '1', { id: '1', username: 'user1' } as User );
    this.users.set ( '2', { id: '2', username: 'user2' } as User );
    this.users.set ( '3', { id: '3', username: 'user3' } as User );
  }

  create ( createUserInput: CreateUserInput ) {

    return 'This action adds a new user';
  }

  findAll () {

    this.logger.log ( 'findAll ()' );

    const users = [] as User [];

    this.users.forEach ( ( user, userId ) => {

      users.push ( user );
    } );

    return users;
  }

  // TODO Async ??
  findById ( id: string ): User {

    this.logger.log ( `findById ( id: ${id} )` );

    return this.users.get ( id );
  }

  update ( id: string, updateUserInput: UpdateUserInput ) {

    this.logger.log ( `findById ( updateUserInput: ${JSON.stringify ( updateUserInput )} )` );

    return `This action updates a #${ id } user`;
  }

  remove ( id: string ) {

    this.logger.log ( `remove ( id: ${id} )` );

    return `This action removes a #${ id } user`;
  }
}
