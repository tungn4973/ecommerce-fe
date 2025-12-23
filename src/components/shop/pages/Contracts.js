import React from "react";

const sampleContracts = [
  { id: 1, title: "Hợp đồng chăm sóc dài hạn", period: "1 năm" },
  { id: 2, title: "Hợp đồng chăm sóc ngắn hạn", period: "1 tháng" },
  { id: 3, title: "Hợp đồng dịch vụ y tế", period: "6 tháng" },
];

const Contracts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Hợp đồng</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleContracts.map((c) => (
          <div key={c.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-medium">{c.title}</h3>
            <p className="text-sm text-gray-600">Thời hạn: {c.period}</p>
            <div className="mt-4">
              <button className="px-3 py-1 bg-indigo-600 text-white rounded">Chi tiết</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contracts;
