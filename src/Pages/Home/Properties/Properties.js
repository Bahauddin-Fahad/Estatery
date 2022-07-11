import axios from "axios";
import React, { useEffect, useState } from "react";
import Property from "./Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("properties.json").then((data) => setProperties(data.data));
  }, []);
  //   console.log(properties);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 w-full max-w-5xl mx-auto">
        {properties.map((property) => (
          <Property key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
