import React from "react";
import Chip from "./Chip";

const Main = props => {
  function compareTime(a, b) {
    let aTime =
      parseInt(a.hour, 10) * 100 +
      parseInt(a.minute, 10) +
      (a.ampm === "PM" ? 1200 : 0);
    let bTime =
      parseInt(b.hour, 10) * 100 +
      parseInt(b.minute, 10) +
      (b.ampm === "PM" ? 1200 : 0);

    return aTime - bTime;
  }
  const sortedArray = [].concat(props.calenderEvents).sort(compareTime);
  return (
    <div className="main">
      <div className="mainHeader">Scheduled Events: </div>
      <div className="mainEvents">
        {sortedArray.map(
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
