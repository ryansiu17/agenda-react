import React from "react";
import Chip from "./Chip";

const Main = props => {
  return (
    <div className="main">
      <div className="mainHeader">Scheduled Events: </div>
      <div className="mainEvents">
        {props.calenderEvents.map(
          ({ title, description, hour, minute, ampm, key, color }) => {
            return (
              <Chip
                key={key}
                title={title}
                description={description}
                hour={hour}
                minute={minute}
                ampm={ampm}
                color={color}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Main;
