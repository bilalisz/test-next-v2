import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import client from "../src/graphql/apollo-client";
import Header from "../src/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="mx-auto ">
        <Header />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
