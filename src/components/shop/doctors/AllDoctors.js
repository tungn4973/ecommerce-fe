import React from "react";
import { useHistory } from "react-router-dom";

const doctors = [
  { id: 1, name: "Nguyễn Văn Hưng", age: 30, exp: "6 năm" },
  { id: 2, name: "Nguyễn Văn Hưng", age: 30, exp: "6 năm" },
];

const AllDoctors = () => {
  const history = useHistory();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Giới thiệu các bác sĩ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((d) => (
          <div key={d.id} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="text-xl font-medium">{d.name}</h3>
            <p>Tuổi: {d.age}</p>
            <p>Kinh nghiệm: {d.exp}</p>
            <div className="mt-4">
              <button
                onClick={() => history.push(`/doctors/${d.id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
