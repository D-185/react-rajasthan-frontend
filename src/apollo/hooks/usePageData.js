// src/apollo/hooks/usePageData.js
import { useQuery } from '@apollo/client';
import { GET_PAGE_BY_SLUG } from '../queries/pages';

export const usePageData = (slug) => {
  const { loading, error, data, networkStatus } = useQuery(GET_PAGE_BY_SLUG, {
    variables: { slug },
    skip: !slug,
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
    onCompleted: (data) => {
      console.log('Query completed:', { data });
    },
    onError: (error) => {
      console.error('Query error:', {
        message: error.message,
        networkError: error.networkError,
        graphQLErrors: error.graphQLErrors,
      });
    },
  });

  // Log the current state for debugging
  console.log('usePageData state:', {
    loading,
    networkStatus,
    error,
    data,
    slug,
  });

  return {
    loading,
    error,
    page: data?.pages?.data?.[0]?.attributes || null,
    networkStatus,
  };
};