import React from "react";
import { Icons } from "../../assets";

export default function Button() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#5A1F08",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          borderRadius: "50px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          width: "249px",
          justifyContent: "center",
          border: "30px",
          color: "white",
          fontSize: "1rem",
        }}
      >
        <Icons.Basket />
        <span>Your Cart</span>
        <button
          style={{
            backgroundColor: "#7E2A0A",
            padding: "4px 10px",
            borderRadius: "50%",
            fontSize: "0.9rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
          }}
        >
          7
        </button>
      </div>
    </div>
  );
}
