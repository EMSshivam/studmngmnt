import React from "react";
// import "./DrawerChild.css";

function DrawerChild(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "200px",
        left: "25%",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: 10 }}>Name</div>
        <div
          style={{
            background: "#f8f5f1",
            color: "#000",
            margin: 10,
            textAlign: "center",
            paddingLeft: 30,
            paddingRight: 30,
            width: 100,
          }}
        >
          {props.data.name}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: 10 }}>Age</div>
        <div
          style={{
            margin: 10,
            width: 100,
            textAlign: "center",
            marginLeft: 50,
          }}
        >
          {props.data.age}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: 10 }}>Gender</div>
        <div
          style={{
            margin: 10,
            width: 100,
            textAlign: "center",
            marginLeft: 30,
          }}
        >
          {props.data.gender}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: 10 }}>Sports</div>
        <div
          style={{
            background: "#f8f5f1",
            color: "#000",
            margin: 10,
            minWidth: 160,
            textAlign: "center",
          }}
        >
          {props.data.sports.map((sport) => (
            <div
              style={{
                display: "inline",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {sport}
              {props.data.sports.length > 1 ? "," : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DrawerChild;
