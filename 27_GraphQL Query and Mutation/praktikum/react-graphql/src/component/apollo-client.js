// code baru Hasura 

import { ApolloClient, InMemoryCache } from '@apollo/client'

// config http link 
// const http = new () => 


// config web socket
const wsLink = new WebSocketLink({
    uri: 'https://hip-pelican-17.hasura.app/v1/graphql',
    option: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': 'DSZkqLTxKAGjZfluXPLrDrSgeV4hEHjnbnEfV7pYiaPPaZqbQ5z0vYAQdEdN6N1k'
            }
        }
    }
})

const client = new ApolloClient({
    // uri: 'https://modern-troll-93.hasura.app/v1/graphql', // base URL API GrapgQL
    // uri: 'https://hip-pelican-17.hasura.app/v1/graphql',
    uri: 'https://hip-pelican-17.hasura.app/v1/graphql',
    cache: new InMemoryCache(), // setting untuk menambahkan cache
    headers: {
        // 'x-harusa-admin-secret': 'EEgvQeFT73UiljQvIAWPAAT9oxQ9R7XC8S2jQtTkyK0OwH1osvFugDT3fywdFm51'
        // 'x-harusa-admin-secret': 'DSZkqLTxKAGjZfluXPLrDrSgeV4hEHjnbnEfV7pYiaPPaZqbQ5z0vYAQdEdN6N1k'
        'x-hasura-admin-secret': 'DSZkqLTxKAGjZfluXPLrDrSgeV4hEHjnbnEfV7pYiaPPaZqbQ5z0vYAQdEdN6N1k'
    }
})

export default client