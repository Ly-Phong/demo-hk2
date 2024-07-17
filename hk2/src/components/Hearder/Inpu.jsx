import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sanphamphukien } from "../Data/Chitietsanpham";

const Inpu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = sanphamphukien.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm)
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={handleChange}
        className="p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        style={{
          backgroundImage: 'url(/public/tainguyen/search-icon.png)',
          backgroundPosition: '10px center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {searchTerm && (
        <div className="absolute bg-white shadow-lg mt-2 w-full z-10 rounded-md overflow-hidden">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/chitiet/${product.id}`}
              className="flex items-center p-4 border-b last:border-0 hover:bg-gray-100 transition duration-300 cursor-pointer"
            >
              <img src={product.img} alt={product.name} className="w-16 h-16 object-cover rounded-md"/>
              <div className="ml-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.price} VND</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inpu;
