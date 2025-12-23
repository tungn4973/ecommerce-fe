import React from "react";

const HeaderSection = ({ title = "Chăm sóc người cao tuổi", subtitle = "Dịch vụ tận tâm, chuyên nghiệp" }) => {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <div className="container mx-auto px-4 py-4">
        <h1 style={{ margin: 0, fontSize: 24, color: "#111" }}>{title}</h1>
        <p style={{ margin: "6px 0 0", color: "#666" }}>{subtitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
