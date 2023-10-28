import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== undefined;

export const userClient = new GraphQLClient("http://localhost:8000/graphql/", {
  headers: () => ({
    auth: isClient
      ? `Bearer ${window.localStorage.getItem("__twitter_clone")}`
      : "",
  }),
});
