import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Graphql/Queries";
const gpVariables = {
  limit: 1500,
  offset: 0,
};
export default function GetAllPokemon() {
  const { error, loading, data } = useQuery(GET_POKEMONS, {
    variables: gpVariables,
  });

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
}
