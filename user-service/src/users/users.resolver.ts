import { Resolver, Query, Mutation, Args, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput, UpdateUserInput } from "../../generated/graphql-generated";
import { Logger } from "@nestjs/common";

@Resolver ( 'User' )
export class UsersResolver {

  private logger = new Logger ( 'UsersResolver' );

  constructor ( private readonly usersService: UsersService ) {

  }

  @Mutation ( 'createUser' )
  create ( @Args ( 'createUserInput' ) createUserInput: CreateUserInput ) {

    this.logger.log ( `create ( ${createUserInput} )` );

    return this.usersService.create ( createUserInput );
  }

  @Query ( 'users' )
  findAll () {

    this.logger.log ( 'findAll ()' );

    return this.usersService.findAll ();
  }

  @Query ( 'user' )
  findById ( @Args ( 'id' ) id: string ) {

    this.logger.log ( `findById ( id: ${id} )` );

    return this.usersService.findById ( id );
  }

  @Mutation ( 'updateUser' )
  update ( @Args ( 'updateUserInput' ) updateUserInput: UpdateUserInput ) {

    this.logger.log ( `update ( id: ${updateUserInput} )` );

    return this.usersService.update ( updateUserInput.id, updateUserInput );
  }

  @Mutation ( 'removeUser' )
  remove ( @Args ( 'id' ) id: string ) {

    this.logger.log ( `remove ( id: ${id} )` );

    return this.usersService.remove ( id );
  }

  @ResolveReference ()
  resolveReference ( reference: { __typename: string; id: string } ) {

    this.logger.log ( `resolveReference ( reference: ${JSON.stringify ( reference )} )` );

    return this.usersService.findById ( reference.id );
  }
}
