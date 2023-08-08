import React from "react";

const Popup = ({ show }) => {
  return (
    <div className={`popup ${show ? "show" : ""}`}>
    <div className="popup-content">
      <h3>Item added to cart!</h3>
    </div>
  </div>
  );
};

export default Popup;
