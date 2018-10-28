import React from "react";

const Chip = props => {
  return (
    <div className="chip" style={{ background: props.color }}>
      <div className="chipText">
        {props.title} :{" "}
        <span className="chipDescription">
          {props.description} @ {props.hour}:{props.minute} {props.ampm}
        </span>
      </div>
    </div>
  );
};

export default Chip;
