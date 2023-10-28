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
