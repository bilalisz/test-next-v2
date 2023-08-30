import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL
  ? process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL
  : "http://localhost:3000/api/graphql/";

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default client;
