"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/app/_utils/apollo";

export function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
