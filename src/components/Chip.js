import React from "react";
import { Spring } from "react-spring";
class Chip extends React.Component {
  myButton = React.createRef();

  deleteMe = event => {
    event.preventDefault();
    this.props.deleteChip(this.props.id);
  };
  render() {
    return (
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-20px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        {props => (
          <div
            className="chip"
            style={{ ...props, background: this.props.color }}
            ref={this.myButton}
          >
            <div className="chipText">
              {this.props.title} :{" "}
              <span className="chipDescription">
                {this.props.description} @ {this.props.hour}:{this.props.minute}{" "}
                {this.props.ampm}{" "}
              </span>
              <button
                className="chipButton"
                style={{ backgroundColor: this.props.color }}
                onClick={this.deleteMe}
              >
                X
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Chip;
