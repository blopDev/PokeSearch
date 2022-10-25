import { useQuery } from "@apollo/client";
import {GET_COLOR, GET_HEIGHT, GET_POKEMONS, GET_TYPES, GET_WEIGHT} from "../Graphql/Queries";


export function GetAllPokemon() {
  const { error, loading, data } = useQuery(GET_POKEMONS);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
  return (
    <div>
      {data.getAllPokemon.map(pokemon => <div>{pokemon.species}</div>)}
      </div>
  )
}


export function GetTypes() {
  const { error, loading, data } = useQuery(GET_TYPES);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
}

export function GetColors() {
  const { error, loading, data } = useQuery(GET_COLOR);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
}

export function GetWeights() {
  const { error, loading, data } = useQuery(GET_WEIGHT);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
}

export function GetHeights() {
  const { error, loading, data } = useQuery(GET_HEIGHT);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data)
}

