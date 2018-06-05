import React from 'react';
import Site from './Site';

import gql from 'graphql-tag';

import { ApolloProvider, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://127.0.0.1:8000/graphql/' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const QUERY = gql`
  query FeedQuery {
    notes {
      title
    }
  }
`;


const App = () => {
    return (
      <ApolloProvider client={client}>
        <Query query={QUERY}>
          {({ loading, error, data }) => {
            if (error) return <div>Error...</div>;
            if (loading || !data) return <div>Loading...</div>;
            return <Site data={data} />
          }}
        </Query>
      </ApolloProvider>
    );
}

export default App;
