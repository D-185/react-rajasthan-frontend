import { gql } from '@apollo/client';
import { 
  PAGE_FIELDS,
  SECTION_1_FIELDS,
  SECTION_2_FIELDS,
  SECTION_3_FIELDS
} from '../fragments';

export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages {
      ...PageFields
    }
  }
  ${PAGE_FIELDS}
  ${SECTION_1_FIELDS}
  ${SECTION_2_FIELDS}
  ${SECTION_3_FIELDS}
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      ...PageFields
    }
  }
  ${PAGE_FIELDS}
  ${SECTION_1_FIELDS}
  ${SECTION_2_FIELDS}
  ${SECTION_3_FIELDS}
`;
