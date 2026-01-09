import { gql } from '@apollo/client';

export const SECTION_1_FIELDS = gql`
  fragment Section1Fields on ComponentSharedSection1 {
    __typename
    role
    name
    imgUrl
    id
  }
`;

export const SECTION_2_FIELDS = gql`
  fragment Section2Fields on ComponentSharedSection2 {
    __typename
    skills
    id
    bio
  }
`;

export const SECTION_3_FIELDS = gql`
  fragment Section3Fields on ComponentSharedSection3 {
    __typename
    socialLinks {
      url
      type
    }
    projects
    id
  }
`;
