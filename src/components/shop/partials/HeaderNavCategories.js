import React from "react";
import { useHistory } from "react-router-dom";

const HeaderNavCategories = ({ mobile = false }) => {
  const history = useHistory();

  const baseClass =
    mobile
      ? "font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
      : "hover:bg-gray-200 px-6 py-3 rounded-full text-lg font-semibold hover:text-gray-800 cursor-pointer";

  return (
    <>
      <span className={baseClass} onClick={() => history.push("/profile")}>
        Thông tin cá nhân
      </span>
      <span className={baseClass} onClick={() => history.push("/skills")}>
        Kỹ năng
      </span>
      <span className={baseClass} onClick={() => history.push("/certificates")}>
        Chứng chỉ
      </span>
      <span className={baseClass} onClick={() => history.push("/contracts")}>
        Hợp đồng
      </span>
    </>
  );
};

export default HeaderNavCategories;
