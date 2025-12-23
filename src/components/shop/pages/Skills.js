import React from "react";

const sampleSkills = [
  { id: 1, title: "Kỹ năng hồi sức", desc: "Mô tả tóm tắt về kỹ năng hồi sức" },
  { id: 2, title: "Kỹ năng dinh dưỡng", desc: "Mô tả tóm tắt về dinh dưỡng cho người cao tuổi" },
  { id: 3, title: "Kỹ năng giao tiếp", desc: "Mô tả tóm tắt về giao tiếp và chăm sóc tinh thần" },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Kỹ năng</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleSkills.map((s) => (
          <div key={s.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-medium mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
            <div className="mt-4">
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Xem chi tiết</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
