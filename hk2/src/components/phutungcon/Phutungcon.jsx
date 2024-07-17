import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const phu = [
  {
    id: 1,
    img: "./public/tainguyen/timthumb.jpg",
    name: "Phụ Tùng Chính Hãng",
    price: "15.000.000đ",
  },
  {
    id: 2,
    img: "./public/tainguyen/timthumb-1.jpg",
    name: "Phụ Tùng Chính Hãng",
    price: "Liên hệ",
  },
  {
    id: 3,
    img: "./public/tainguyen/timthumb-2.jpg",
    name: "EFL MOTO-4T",
    price: "295.000đ",
  },
  {
    id: 4,
    img: "./public/tainguyen/timthumb-3.jpg",
    name: "Dầu Vent Vert Elf",
    price: "485.000đ",
  },
];

const Modal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={item.img} alt={item.name} className="modal-img" />
        <p className="modal-name">{item.name}</p>
        <p className="modal-info"><strong>Giá sản phẩm:</strong> {item.price}</p>
        <p className="modal-info">{item.description}</p>
        <Link to={`/product/${item.id}`} className="modal-link">Xem thêm</Link>
        <button className="close-btn" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

const Phutungcon = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="hangbot">
      {phu.map((item) => (
        <div key={item.id} className="product-item">
          <img src={item.img} alt={item.name} onClick={() => handleItemClick(item)}/>
          <div className="product-details">
            <p className="product-name" onClick={() => handleItemClick(item)}>{item.name}</p>
            <p className="product-price">{item.price}</p>
          </div>
        </div>
      ))}
      <Modal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
}

export default Phutungcon;
