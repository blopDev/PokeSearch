import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import Pokemon from "./pages/Pokemon";
import { useState } from "react";

function App() {
const [searchInput, setSearchInput] = useState();
  
  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <>
      <Box >
        <AppBar position="static" >
          <Toolbar >
            <Typography sx={{ flexGrow: 1 }}>Poke Search {searchInput}</Typography>
            <TextField sx={{backgroundColor: 'white', color: 'primary.main', width: 250, borderRadius: 2 }} id="standard-basic" label="Pokemon's Name" variant="filled" onChange={handleChange}/>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home searchInput={searchInput}/>} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:pokemonName" element={<Pokemon />}/>
      </Routes>
    </>
  );
}

export default App;
