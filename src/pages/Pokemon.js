import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_NAME } from "../Graphql/Queries";

function PokemonTest() {
  const { pokemonName } = useParams();

  const { error, loading, data } = useQuery(GET_POKEMON_NAME, {
    variables: { pokemon: `${pokemonName}` },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);

  return (
    <>
      {[data.getPokemon].map((pokemon) => (
        <div key={pokemon.key}>
          <h1>{pokemon.species}</h1>
          <h2>{pokemon.flavorTexts[0].flavor}</h2>
        </div>
      ))}
    </>
  );
}

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
  new HttpLink({ uri: "https://graphqlpokemon.favware.tech/v7" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default function Go() {
  return (
    <ApolloProvider client={client}>
      <PokemonTest />
    </ApolloProvider>
  );
}
