import React from "react";

const PersonalInfo = () => {
  // Placeholder personal info — adjust fields as needed
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123 456 789",
    address: "Hà Nội, Việt Nam",
  };

  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Thông tin cá nhân</h1>
      <div className="bg-white p-6 rounded shadow w-full">
        <p><strong>Họ và tên:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Điện thoại:</strong> {user.phone}</p>
        <p><strong>Địa chỉ:</strong> {user.address}</p>
        <div className="mt-4">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Chỉnh sửa</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
