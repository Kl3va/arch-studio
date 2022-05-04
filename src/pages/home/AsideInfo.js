import React from "react";

const AsideInfo = ({ text }) => {
  return (
    <aside className="aside-info">
      <div className="empty"></div>
      <p>{text}</p>
    </aside>
  );
};

export default AsideInfo;
