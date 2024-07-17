import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sanphamphukien } from "./Sanphamphukien"; // Điều chỉnh đường dẫn import nếu cần

const Phukiencon = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const sortProducts = (products, sortBy, sortOrder) => {
    return [...products].sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc"
          ? parseInt(a.price) - parseInt(b.price)
          : parseInt(b.price) - parseInt(a.price);
      } else if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });
  };

  const filteredAndSortedProducts = sortProducts(
    sanphamphukien.filter((product) =>
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
    setCurrentPage(1); // Reset về trang đầu tiên khi lọc
  };

  // Tính toán các sản phẩm sẽ được hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
        {currentProducts.map((product) => (
          <Link key={product.id} to={`/chitiet/${product.id}`}>
            <div
              className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-700">
                {parseInt(product.price).toLocaleString()} đ
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          className="border p-2 rounded"
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        <span>
          Trang {currentPage} trên {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="border p-2 rounded"
          disabled={currentPage === totalPages}
        >
          Trang tiếp
        </button>
      </div>
    </div>
  );
};

export default Phukiencon;
