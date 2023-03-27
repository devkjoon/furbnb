import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;