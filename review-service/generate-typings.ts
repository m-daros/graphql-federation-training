import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory ();

definitionsFactory.generate ( {

  typePaths: [ './src/**/*.graphql' ],
  path: join ( process.cwd (), 'generated/graphql-generated.ts' ),
  outputAs: 'class',
  federation: true,
  emitTypenameField: true,
  watch: true
} );