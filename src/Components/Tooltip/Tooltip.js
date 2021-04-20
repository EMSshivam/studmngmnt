import React, { useState } from "react";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (
        <div
          style={{
            background: "#808080",
            position: "absolute",
            marginLeft: "7%",
            padding: 20,
          }}
        >
          <div
            style={{
              padding: 5,
              color: "#fafafa",
            }}
          >
            {`Name:${props.content.name}`}
          </div>
          <div
            style={{
              padding: 5,
              color: "#fafafa",
            }}
          >
            {`Age:${props.content.age}`}
          </div>
          <div
            style={{
              padding: 5,
              color: "#fafafa",
            }}
          >
            {`Gender:${props.content.gender}`}
          </div>
          <div
            style={{
              padding: 5,
              color: "#fafafa",
            }}
          >
            {`Sports:${props.content.sports.map((sport) => sport)},`}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
