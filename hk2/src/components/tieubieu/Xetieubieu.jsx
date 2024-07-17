import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { xeHome } from "./Xehome"; // Đảm bảo import dữ liệu xeHome từ Xehome

const Xetieubieu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [filter, setFilter] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const sortProducts = (products, sortBy, sortOrder) => {
    return [...products].sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });
  };

  useEffect(() => {
    // Sắp xếp và lọc sản phẩm khi có thay đổi trong sortBy, sortOrder hoặc filter
    const sortedProducts = sortProducts(
      xeHome.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      ),
      sortBy,
      sortOrder
    );
    setFilteredAndSortedProducts(sortedProducts);
  }, [sortBy, sortOrder, filter]);

  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState(
    sortProducts(
      xeHome.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      ),
      sortBy,
      sortOrder
    )
  );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedProducts.map((product) => (
          <div
            key={product.id} // Sử dụng key là id của sản phẩm
            className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleItemClick(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.price}</p>
            <Link to={`/chitiet/${product.id}`}>Xem thêm</Link>
          </div>
          
        ))}
      </div>
      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="mt-4 text-2xl font-bold">{selectedItem.name}</p>
            <p className="mt-2">
              <strong>Giá sản phẩm:</strong> {selectedItem.price}
            </p>
            <p>
              <strong>Loại nhiên liệu:</strong> {selectedItem.fuelType}
            </p>
            <p>
              <strong>Chiều dài:</strong> {selectedItem.length}
            </p>
            <p>
              <strong>Dung tích xi lanh:</strong>{" "}
              {selectedItem.cylinderCapacity}
            </p>
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Xetieubieu;
