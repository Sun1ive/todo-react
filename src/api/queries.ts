import { gql } from 'apollo-boost';

export const ME_QUERY = gql`
  Me($token: String!) {
    Me(data: {
      token: $token
     }) {
       id
       email
       username
       todos {
         title
         completed
       }
     }
  }
`;
