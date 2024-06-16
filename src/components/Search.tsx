import React, { Dispatch, SetStateAction } from "react";
import { TextField } from "@mui/material";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Search;
