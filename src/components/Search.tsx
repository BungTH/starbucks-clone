import { Dispatch, SetStateAction } from "react";
import { TextField, Grid, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <Grid>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Starbucks Product"
          variant="standard"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
    </Grid>
  );
};

export default Search;
