import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NODE_GRAPHQL_SERVER } from '@constants/index';
import setup from '@locales/setup';
import { store } from '@redux/store';
import '@styles/global.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const root = createRoot(document.getElementById('root') as HTMLElement);

const client = new ApolloClient({
  uri: NODE_GRAPHQL_SERVER,
  cache: new InMemoryCache({
    addTypename: true,
    typePolicies: {
      employeeByUser: {
        keyFields: ['profile'],
        queryType: true,
      },
    },
  }),
  connectToDevTools: true,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={setup}>
          <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
        </I18nextProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
