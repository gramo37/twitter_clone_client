const { gql } = require("graphql-request");

export const verifyGoogleTokenQuery = gql`
  query verifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;

export const getUserDetailsQuery = gql`
  query getUserDetails {
    getUserInfo {
      id
      firstName
      lastName
      email
      profileImageURL
    }
  }
`;

export const getUserDetailsByIdQuery = gql`
  query GetUserInfoById($userId: ID!) {
    getUserInfoById(id: $userId) {
      id
      firstName
      profileImageURL
      tweets {
        id
        content
        author {
          id
          firstName
          profileImageURL
        }
      }
    }
  }
`;
