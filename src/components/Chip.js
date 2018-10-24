import React from "react";

const Chip = props => {
  return (
    <div className="chip" style={{ background: props.color }}>
      <div className="chipText">
        {props.title} :{" "}
        <span className="chipDescription">
          {props.description} @ {props.time}
        </span>
      </div>
    </div>
  );
};

export default Chip;
