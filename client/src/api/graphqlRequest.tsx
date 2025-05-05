import { ApolloClient, InMemoryCache, DocumentNode } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export const graphqlRequest = async (
query: DocumentNode, variables: Record<string, any> = {}, _undefined?: undefined, _p0?: { Authorization: string; }) => {
  try {
    const result = await client.query({
      query,
      variables,
      fetchPolicy: "no-cache",
    });
    return result.data;
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
};
