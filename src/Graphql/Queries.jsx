import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
query GetAllPokemon($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    num
    species
  }
}
`;

export const GET_WEIGHT = gql`
query GetAllPokemon($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    num
    species
    weight
  }
}
`;
export const GET_HEIGHT = gql`
query GetAllPokemon($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    num
    species
    height
  }
}
`;
export const GET_TYPES = gql`
query GetItem($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    num
    species
    types {
      name
    }
  }
}
`;

export const GET_COLOR = gql`
query GetAllPokemon($offset: Int, $take: Int) {
  getAllPokemon(offset: $offset, take: $take) {
    num
    species
    color
  }
}
`;
