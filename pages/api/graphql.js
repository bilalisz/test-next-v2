import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../src/graphql/schema";
import resolvers from "../../src/graphql/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

await apolloServer.start();
export default apolloServer.createHandler({ path: "/api/graphql" });

// export default function handler(req, res) {
//   res.status(200).json({ name: "Bilal", job: "working on Graphql" });
// }
