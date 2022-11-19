import * as React from "react";
import RenderPokemon from "../Options/RenderPokemon";

export default function Home({searchInput}) {

  return (
    <>
      <RenderPokemon searchInput={searchInput}/>   
    </>
  );
}
