import * as React from "react";
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

  return (
    <>
      <Box
        sx={{
          mx: 90,
          mt: 30,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
        />
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
      </Box>
    </>
  );
}
