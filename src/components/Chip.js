import React from "react";

const Chip = props => {
  return (
    <div className="chip">
      <div className="chipText">
        {props.title} - {props.description} @ {props.time}
      </div>
    </div>
  );
};

export default Chip;
