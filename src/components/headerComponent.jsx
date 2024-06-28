import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#52ac4e",
          color: "white",
          height: "80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        Logo
        <ul>
          <li>New Home Page</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
