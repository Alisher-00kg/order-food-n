import React from "react";
import { Icons } from "../../assets";

export default function Button() {
  return (
    <div>
      <button
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
          border: "none",
          color: "white",
          fontSize: "1rem",
        }}
      >
        <Icons.Basket />
        <span>Your Cart</span>
        <span
          style={{
            backgroundColor: "#7E2A0A",
            padding: "6px 11px",
            borderRadius: "50%",
            fontSize: "0.9rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          7
        </span>
      </button>
    </div>
  );
}
