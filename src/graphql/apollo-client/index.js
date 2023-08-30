import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL);
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
  cache: new InMemoryCache(),
});

export default client;
