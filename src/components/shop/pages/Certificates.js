import React from "react";

const sampleCertificates = [
  { id: 1, title: "Chứng chỉ chăm sóc người cao tuổi", org: "Học viện Y" },
  { id: 2, title: "Chứng chỉ dinh dưỡng lâm sàng", org: "Trung tâm Dinh dưỡng" },
  { id: 3, title: "Chứng chỉ sơ cấp cứu", org: "Hội Chữ thập đỏ" },
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Chứng chỉ</h1>
      <div className="space-y-4">
        {sampleCertificates.map((c) => (
          <div key={c.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.org}</p>
            </div>
            <button className="px-3 py-1 bg-green-600 text-white rounded">Xem</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
