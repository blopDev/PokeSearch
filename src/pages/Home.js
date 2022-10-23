import * as React from "react";
import Test from "../Options/Test";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function Home() {
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const [weight, setWeight] = React.useState("");

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const [type, setType] = React.useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          mx: 90,
          mt: 30,
        }}
      >
        <Test />
        <TextField id="outlined-search" label="Search field" type="search" />
        <FormControl sx={{ ml: 2, minWidth: 100 }}>
          <InputLabel id="color-label"> Color </InputLabel>
          <Select
            autoWidth
            label="Color"
            id="color-select"
            onChange={handleChange}
            value={color}
          >
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"IUODFhewiofdjheoiwjofhi"}>
              IUODFhewiofdjheoiwjofhi
            </MenuItem>
            <MenuItem value={"Purple"}>Purple</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ ml: 2, minWidth: 100 }}>
          <InputLabel id="weight-label"> Weight </InputLabel>
          <Select
            autoWidth
            label="Weight"
            id="weight-select"
            onChange={handleWeight}
            value={weight}
          >
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={500}>500</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ ml: 2, minWidth: 100 }}>
          <InputLabel id="type-label"> Type </InputLabel>
          <Select
            autoWidth
            label="Type"
            id="type-select"
            onChange={handleType}
            value={type}
          >
            <MenuItem value={"Fire"}>Fire</MenuItem>
            <MenuItem value={"Grass"}>Grass</MenuItem>
            <MenuItem value={"Water"}>Water</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
