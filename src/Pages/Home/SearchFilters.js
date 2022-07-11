import React from "react";

const SearchFilters = () => {
  return (
    <div className="bg-white w-full max-w-5xl mx-auto mt-10 p-2 rounded-md">
      <div className="flex justify-around pt-2">
        <div>
          <p className="text-start text-gray-400 text-sm font-bold">Location</p>
          <select className="select select-ghost w-full max-w-sm pl-0 font-bold">
            <option disabled selected>
              New York,USA
            </option>
            <option>Los Angels</option>
            <option>Texas</option>
            <option>California</option>
          </select>
        </div>
        <div className="h-14 w-[2px] rounded-full bg-gray-300"></div>
        <div>
          <p className="text-start text-gray-400 text-sm font-bold">When</p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold">
            <option disabled selected>
              Select Move-in Date
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <div className="h-14 w-[2px] rounded-full bg-gray-300"></div>
        <div></div>
        <div>
          <p className="text-start text-gray-400 text-sm font-bold">Price</p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold">
            <option disabled selected>
              $500-$2,500
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <div className="h-14 w-[2px] rounded-full bg-gray-300"></div>
        <div></div>
        <div>
          <p className="text-start text-gray-400 text-sm font-bold">
            Property Type
          </p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold">
            <option disabled selected>
              Houses
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <div className="h-14 w-[2px] rounded-full bg-gray-300"></div>
        <div></div>
        <div className="flex items-center">
          <button className="btn btn-primary text-white">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
