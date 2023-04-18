
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://direct-sole-57.hasura.app/v1/graphql',
        headers: {
            'x-hasura-admin-secret': 'jtTbklCM13RJLZC2fdlV8fJV9Rq4wT26ESv8BXxS0QZsUWsFaqe0zv07W6ccItzh'
        },
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;