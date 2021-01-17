import { database } from "./db/index.js";
import { schema } from "./schema/schema.js";
import { ApolloServer } from 'apollo-server';

database.initialize();

const server = new ApolloServer({ schema });

server
  .listen(5000)
  .then(({ url }) => {
    console.log(`Server listening on ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
