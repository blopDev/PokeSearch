import { useQuery } from "@apollo/client";
import {
  GET_COLOR,
  GET_HEIGHT,
  GET_POKEMONS,
  GET_TYPES,
  GET_WEIGHT,
} from "../Graphql/Queries";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";


export function GetAllPokemon() {


  const { error, loading, data } = useQuery(GET_POKEMONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);


  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>Sprite</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getAllPokemon.map((pokemon) => (
              <TableRow key={pokemon.key}>
                <TableCell>{pokemon.num}</TableCell>
                <TableCell>
                  <img src={pokemon.sprite} alt={pokemon.species} />
                </TableCell>
                <TableCell pokename={pokemon.species}>
                  <Link to={`pokemon/${pokemon.species}`}>
                    {pokemon.species}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}



export function GetTypes() {
  const { error, loading, data } = useQuery(GET_TYPES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
}

export function GetColors() {
  const { error, loading, data } = useQuery(GET_COLOR);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
}

export function GetWeights() {
  const { error, loading, data } = useQuery(GET_WEIGHT);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
}

export function GetHeights() {
  const { error, loading, data } = useQuery(GET_HEIGHT);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
}
