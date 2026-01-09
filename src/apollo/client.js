import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink,
  ApolloLink 
} from '@apollo/client';

// Create HTTP link with proper configuration
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BASE_URL_GRAPHQL,
  credentials: 'same-origin' // Include cookies for authentication if needed
});

// Create a middleware link for logging
const loggerLink = new ApolloLink((operation, forward) => {
  console.log('GraphQL Operation:', operation.operationName);
  console.log('Variables:', operation.variables);
  
  return forward(operation).map((result) => {
    if (result.errors) {
      console.error('GraphQL Errors:', result.errors);
    }
    return result;
  });
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: ApolloLink.from([loggerLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pages: {
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default client;
