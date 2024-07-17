import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { sanphamphukien } from "./Chitietsanpham.js";
// import ModalForm from "./ModalForm.jsx";

const Chitiet = () => {
  const { id } = useParams();
  const product = sanphamphukien.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-4">Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8 grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-lg"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <p className="mt-4 text-lg">Giá: {parseInt(product.price).toLocaleString()} đ</p>
      </div>
      <div>
        {product.type === "xe" && (
          <div className="mt-4">
            <p>Chiều cao: {product.height}</p>
            <p>Chiều dài: {product.length}</p>
            <p>Cân nặng: {product.weight}</p>
            <p>Dung tích xi-lanh: {product.capacity}</p>
            <p>Loại nhiên liệu: {product.fuelType}</p>
          </div>
        )}
        {product.type === "phukien" && (
          <div className="mt-4">
            <p>Mã sản phẩm: {product.material}</p>
            <p>xuất xứ: {product.brand}</p>
            <p>Tình trạng:: {product.accessoryType}</p>
            <p> Mô tả: {product.description}</p>
          </div>
        )}
        {/* <ModalForm /> */}
      </div>
    </div>
  );
};

export default Chitiet;