import { gql, makeExecutableSchema } from 'apollo-server';

import { postResolvers } from './resolvers/postResolvers.js';
import { postTypeDefs } from './typeDefs/postType.js';

const typeDefs = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, postTypeDefs],
  resolvers: postResolvers,
});
