import { gql } from 'apollo-boost';

export const REGISTRATION_MUTATION = gql`
  mutation Register($email: String!, $username: String, $password: String!) {
    Register(
      data: { username: $username, password: $password, email: $email }
    ) {
      id
      email
      username
      token
    }
  }
`;
