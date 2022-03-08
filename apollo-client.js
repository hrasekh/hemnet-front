import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_DOMAIN}/graphql`,
    cache: new InMemoryCache,
});

export default client;