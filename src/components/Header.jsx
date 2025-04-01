import React from "react";
export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#8A2B06",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: "86px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>ReactMeals</h1>
    </header>
  );
}
