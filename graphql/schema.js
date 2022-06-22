import path from "path";
import * as types from "./types";
import { makeSchema } from "nexus";
export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "./graphql/generated/nexus-typegen.js"),
    typegen: path.join(process.cwd(), "./graphql/generated/schema.graphql"),
  },
});

/* import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type Link {
    id: String
    title: String
    description: String
    imagesUrl: String
    url: String
  }

  type User {
    id: String
    email: String
    image: String
    admin: Boolean
  }

  type Query {
    Users: [User]!
  }

  type Query {
    Links: [Link!]!
  }
`; */
