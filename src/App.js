import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <>
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1}}>
            Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time.
            </Typography>
            <Button color="inherit">Cat Finder</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
