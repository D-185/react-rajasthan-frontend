import { gql } from "@apollo/client";

// Example query - replace with your actual queries
export const GET_HOME_PAGE = gql`
  query GetHomePage {
    homePage {
      id
      title
      content
    }
  }
`;

// Add more queries here as needed
