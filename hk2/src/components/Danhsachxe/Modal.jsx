import React from "react";
import { sanpham } from "./Sanpham";

const Modal = ({ item, onClose }) => {
  if (!item || !sanpham) return null; // Kiểm tra item và sanpham có dữ liệu

  const product = sanpham.find((prod) => prod.id === item.id); // Tìm sản phẩm trong danh sách sanpham

  if (!product) return null; // Nếu không tìm thấy sản phẩm, return null

  const handleDetailClick = (e) => {
    e.stopPropagation();
    window.location.href = `/product/${item.id}`;
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <p className="mt-4 text-2xl font-bold">{product.name}</p>
        <p className="mt-2">
          <strong>Giá sản phẩm:</strong> {parseInt(product.price).toLocaleString()} đ
        </p>
        <p className="mt-3">
          <strong>Chiều cao:</strong> {product.height}
        </p>
        <p className="mt-3">
          <strong>Chiều dài:</strong> {product.length}
        </p>
        <p className="mt-3">
          <strong>Cân nặng:</strong> {product.weight}
        </p>
        <p className="mt-3">
          <strong>Dung tích xi-lanh:</strong> {product.capacity}
        </p>
        <p className="mt-3">
          <strong>Loại nhiên liệu:</strong> {product.fuelType}
        </p>
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default Modal;
