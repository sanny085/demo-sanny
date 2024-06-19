import React from "react";

const HeaderComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <img
        src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg"
        width="300"
        height="400"
        alt="alt pic for header"
      />
      <img
        src="/header/dhoni.jpeg"
        width="300"
        height="400"
        alt="alt pic for header"
      />
      {/* this is the nested component */}
    </div>
  );
};

export default HeaderComponent;
