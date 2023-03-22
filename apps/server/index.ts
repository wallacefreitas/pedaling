import "reflect-metadata"

import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { GraphQLUsersRepository as UsersResolver } from "./services/user/src/infra/repositories/graphql/graphql-users-repository";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UsersResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

main();