import React from "react";
import { useParams, useHistory } from "react-router-dom";

const data = {
  1: { id: 1, name: "Nguyễn Văn Hưng", age: 30, exp: "6 năm", bio: "Bác sĩ chuyên khoa với nhiều năm kinh nghiệm chăm sóc người cao tuổi." },
  2: { id: 2, name: "Nguyễn Văn Hưng", age: 30, exp: "6 năm", bio: "Bác sĩ chuyên khoa với nhiều năm kinh nghiệm chăm sóc người cao tuổi." },
};

const DoctorDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const doc = data[id];

  if (!doc) return <div className="p-8">Bác sĩ không tồn tại.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => history.goBack()} className="mb-4 text-blue-600">
        ← Quay lại
      </button>
      <h2 className="text-2xl font-semibold mb-4">{doc.name}</h2>
      <p>Tuổi: {doc.age}</p>
      <p>Kinh nghiệm: {doc.exp}</p>
      <p className="mt-4">{doc.bio}</p>
    </div>
  );
};

export default DoctorDetails;
