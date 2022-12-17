import React from "react";

const Die = (props) => {
  return (
    <div
      onClick={() => props.holdDice(props.id)}
      className={`die${props.isHeld ? "True" : ""}`}
    >
      <img className="dieNum" src={props.img} />
    </div>
  );
};

export default Die;
