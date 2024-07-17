import React from "react";

const ModalForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [note, setNote] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFullname("");
    setPhone("");
    setProduct("");
    setNote("");
  };

  const handleSubmit = () => {
    alert("Xác nhận nộp thành công ✅");
    closeModal();
  };

  return (
    <>
      {/* Button để mở modal */}
      <button onClick={openModal}>Mở Modal</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-50 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">
              Bạn cần tư vấn về sản phẩm?
            </h3>
            <div className="mb-4">
              <label htmlFor="fullname" className="block mb-1">
                Họ và tên
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Nhập họ và tên của bạn"
                className="w-full px-3 py-2 border rounded-md"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                Số điện thoại
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Nhập số điện thoại của bạn"
                className="w-full px-3 py-2 border rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product" className="block mb-1">
                Sản phẩm cần tư vấn *
              </label>
              <input
                id="product"
                type="text"
                placeholder="Nhập tên dòng xe bạn đang quan tâm"
                className="w-full px-3 py-2 border rounded-md"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="note" className="block mb-1">
                Lưu ý với nhân viên tư vấn
              </label>
              <textarea
                id="note"
                placeholder="Bạn cần thông tin gì cụ thể? Thời gian chúng tôi nên liên hệ với bạn?"
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Đóng Modal
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSubmit}
              >
                Nộp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
