import React from "react";
import Properties from "./Properties/Properties";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-2">
      <SearchBar />
      <SearchFilters />
      <Properties />
    </div>
  );
};

export default Home;
