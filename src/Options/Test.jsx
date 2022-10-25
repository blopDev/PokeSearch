import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GetAllPokemon, GetColors, GetHeights, GetTypes, GetWeights} from "../Components/PokemonInfo";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) 
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphqlpokemon.favware.tech/v7" })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

export default function Test() {
  return (
    <ApolloProvider client={client}>
      <GetAllPokemon />
      <GetWeights />
      <GetTypes />
      <GetHeights />
      <GetColors />
    </ApolloProvider>
  );
}
