import React from "react";
import { CgHeart } from "react-icons/cg";
import { IoBedOutline } from "react-icons/io5";
import { TbBath, TbSquareRotated } from "react-icons/tb";
const Property = ({ property }) => {
  const { name, img, price, address, bed, bath, area } = property;
  return (
    <div className="mx-auto">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title text-primary font-bold">
                ${price}
                <span className="text-xs text-gray-400">/month</span>
              </h2>
              <h2 className="card-title font-bold">{name}</h2>
            </div>
            <div className="h-8 w-8 flex justify-center items-center ring-2 ring-gray-300 rounded-full">
              <CgHeart className="h-5 w-5 text-primary " />
            </div>
          </div>
          <p className="text-start text-gray-400 font-semibold ">{address}</p>
          <div className="divider m-0"></div>
          <div className="card-actions flex justify-evenly">
            <div className="flex items-center gap-1">
              <IoBedOutline className="text-primary w-6 h-6" />
              <p className="text-gray-400 font-semibold"> {bed} Beds</p>
            </div>
            <div className="flex items-center gap-1">
              <TbBath className="text-primary w-6 h-6" />
              <p className="text-gray-400 font-semibold"> {bath} Bathrooms</p>
            </div>
            <div className="flex items-center gap-1">
              <TbSquareRotated className="text-primary w-6 h-6" />
              <p className="text-gray-400 font-semibold">
                {area} m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
