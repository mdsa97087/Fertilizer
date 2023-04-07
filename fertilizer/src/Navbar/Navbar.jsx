import React from "react";

function Navbar() {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "red",
        borderRadius: "50%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent:'center'
      }}
    >
      <img
        src="https://i.imgur.com/0YdqmSg.png?1
      "
        alt=""
        width={50}
        style={{
          borderRadius: "50%",
          margin: "auto",
        }}
      />
    </div>
  );
}

export default Navbar;
