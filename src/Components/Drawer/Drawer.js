import React from "react";
import "./Drawer.css";
function Drawer(props) {
  const handleCloseDrawer = () => {
    props.closeDrawer();
  };
  return (
    <div
      className="drawer"
      style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => handleCloseDrawer()}
      >
        X
      </div>
      <div>{props.compo}</div>
    </div>
  );
}
export default Drawer;
