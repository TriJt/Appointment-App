import React from "react";

export default function Popup({ isShow, children }) {
  return (
    <div className={`popup ${isShow ? "active" : ""}`}>
      {children}
    </div>
  );
}
