import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User]
    searchUsers(filter: String): [User!]!
  }

  type User {
    id: ID
    user_name: String
    email: String
    phone: String
    linkedin_url: String
    company: String
  }
`;
export default typeDefs;

// searchUser(value: String): [User]
