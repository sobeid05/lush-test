import { ApolloClient, InMemoryCache } from "@apollo/client";

export function createClient() {
  return new ApolloClient({
    uri: "https://unicorn-staging.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
  });
}
