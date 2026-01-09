import { useQuery as useApolloQuery } from '@apollo/client';

export const useQuery = (query, options = {}) => {
  const { data, loading, error, refetch } = useApolloQuery(query, {
    ...options,
    fetchPolicy: 'cache-first', // Default fetch policy
  });

  return { data, loading, error, refetch };
};
