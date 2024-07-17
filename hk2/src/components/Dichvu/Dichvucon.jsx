import React, { useState } from "react";

const phu = [
  {
    id: 1,
    img: "./public/tainguyen/dvcucho.png",
    name: "Dịch vụ cứu hộ 24/7",
    dichvu:
      "Quý khách hàng có nhu cầu cứu hộ xe 24/7 hãy liên hệ với chúng tôi qua số Hotline:0912322929",
  },
  {
    id: 2,
    img: "./public/tainguyen/dvtuvan.jpg",
    name: "Tư vấn lắp đặt phụ kiện và độ chế xe MOTO",
  },
  {
    id: 3,
    img: "./public/tainguyen/dvdatlich.jpg",
    name: "Đặt lịch sửa chữa và tư vấn dịch vụ",
  },
];

const Dichvucon = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {phu.map((item) => (
        <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={item.img}
            alt={item.name}
            onClick={() => handleItemClick(item)}
            className="w-full h-auto cursor-pointer"
          />
          <div className="p-4">
            <p className="text-xl font-semibold mb-2"><a href="">{item.name}</a></p>
            {item.dichvu && <p className="text-gray-700">{item.dichvu}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dichvucon;
