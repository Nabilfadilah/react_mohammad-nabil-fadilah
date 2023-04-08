import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// code baru Hasura 
import { ApolloClient, ApolloProvider } from '@apollo/client'
import ProductList from './component/ProductList/ProductList';
import client from './component/apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <ApolloClient client={client}>
    <ApolloProvider client={client}>
        <React.StrictMode>
          <ProductList />
        </React.StrictMode>
    </ApolloProvider>,
    {/* </ApolloClient> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
