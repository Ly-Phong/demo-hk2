import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { sanpham } from "./Sanpham";
import Modal from "./Modal";

const Danhsachxe = () => {
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

  const filteredAndSortedProducts = sortProducts(
    sanpham.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    ),
    sortBy,
    sortOrder
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

  const handleBasicInfoClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Lọc theo tên"
          value={filter}
          onChange={handleFilterChange}
          className="border p-2 rounded mr-4"
        />
        <select
          value={sortBy}
          onChange={handleSortByChange}
          className="border p-2 rounded mr-4"
        >
          <option value="price">Giá</option>
          <option value="name">Tên</option>
        </select>
        <button onClick={toggleSortOrder} className="border p-2 rounded">
          Sắp xếp {sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700">
              {product.price.toLocaleString()} đ
            </p>
            <div className="mt-4">
              <Link to={`/chitiet/${product.id}`} className="mr-4 border p-2 rounded">
                Chi tiết
              </Link>
              <button
                onClick={() => handleBasicInfoClick(product)}
                className="border p-2 rounded"
              >
                Thông tin cơ bản
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default Danhsachxe;
