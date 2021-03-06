import React, { useState } from "react";
import Properties from "./Properties/Properties";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };
  return (
    <div className="bg-gray-100 min-h-screen pt-2">
      <SearchBar getInputValue={getInputValue} />
      <SearchFilters />
      <Properties inputValue={inputValue} />
    </div>
  );
};

export default Home;
