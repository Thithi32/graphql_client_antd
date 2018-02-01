import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

import 'antd/dist/antd.css';

import Routes from './routes';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3005/graphql' }),
  cache: new InMemoryCache(),
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
