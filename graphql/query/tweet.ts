import { gql } from "graphql-request";

export const getAllTweetsQuery = gql`
  query GetAllTweets {
    getAllTweets {
      id
      imageURL
      author {
        firstName
        lastName
        profileImageURL
      }
      content
    }
  }
`;
