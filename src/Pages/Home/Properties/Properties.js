import axios from "axios";
import React, { useEffect, useState } from "react";
import Property from "./Property";

const Properties = ({ inputValue }) => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("properties.json").then((data) => setProperties(data.data));
  }, []);
  const searchedProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(inputValue)
  );
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
        {searchedProperties.map((property) => (
          <Property key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
