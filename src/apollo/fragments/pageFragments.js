import { gql } from '@apollo/client';

export const PAGE_FIELDS = gql`
  fragment PageFields on Page {
    title
    slug
    createdAt
    updatedAt
    publishedAt
    dynamic {
      __typename
      ... on ComponentSharedSection1 {
        ...Section1Fields
      }
      ... on ComponentSharedSection2 {
        ...Section2Fields
      }
      ... on ComponentSharedSection3 {
        ...Section3Fields
      }
    }
  }
`;
