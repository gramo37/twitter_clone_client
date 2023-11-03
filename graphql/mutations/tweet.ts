const { gql } = require("graphql-request");

export const createTweet = gql`
  mutation createTweet($payload: CreateTweetData) {
    createTweet(payload: $payload) {
      id
    }
  }
`;
