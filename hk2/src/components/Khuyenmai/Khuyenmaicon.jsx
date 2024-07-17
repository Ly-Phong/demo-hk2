import React from "react";
import khuyen from "./Khuyenm";
import { Link } from "react-router-dom";

const Khuyenmaicon = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {khuyen.map((item) => (
        <div
          key={item.id}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <Link to={`/khuyen-mai/${item.id}`}>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="p-4 bg-white">
              <p className="text-xl font-semibold mb-2">{item.name}</p>
              {item.khuyenmai && (
                <p className="text-gray-700">{item.khuyenmai}</p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Khuyenmaicon;
