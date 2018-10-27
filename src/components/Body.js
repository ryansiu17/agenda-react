import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

class Body extends React.Component {
  state = {
    calenderEvents: [],
    title: "",
    description: "",
    time: "",
    error: undefined,
    theData: [
      {
        title: "style time",
        description: "perhaps make a datepicker",
        time: "900"
      },
      { title: "peen", description: "big descrption nanna", time: "wee woo" }
    ],
    niceColors: [
      "#4c588a",
      "#8d4646",
      "#448d54",
      "#8b5e2a",
      "#914680",
      "#3e2042",
      "#4d2020",
      "#1f1e42",
      "#386472"
    ],
    blueColors: [
      "#3445df",
      "#5053ce",
      "#5858b3",
      "#2f78ff",
      "#1c47bd",
      "#212c68",
      "#0d3279",
      "#4c7eda",
      "#acd1f3",
      "#2e394d",
      "#1e2d49",
      "#2e434d"
    ]
  };
  changeTitle = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };

  changeDescription = e => {
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  };

  changeTime = e => {
    e.preventDefault();
    this.setState({
      time: e.target.value
    });
  };

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomBlueColor = () => {
    let blueColors = this.state.blueColors;
    return (blueColors =
      blueColors[Math.floor(Math.random() * blueColors.length)]);
  };
  getRandomNiceColor = () => {
    let niceColors = this.state.niceColors;
    return niceColors[Math.floor(Math.random() * niceColors.length)];
  };

  submitEvents = e => {
    var keyVal = new Date().getTime();
    var randColor = this.getRandomBlueColor();
    e.preventDefault();
    const newArray = {
      title: this.state.title,
      description: this.state.description,
      time: this.state.time,
      key: keyVal,
      color: randColor
    };
    this.setState({
      calenderEvents: [...this.state.calenderEvents, newArray],
      title: "",
      description: "",
      time: ""
    });
  };

  render() {
    return (
      <div className="mainBody">
        <Sidebar
          changeTitle={this.changeTitle}
          changeDescription={this.changeDescription}
          changeTime={this.changeTime}
          submitEvents={this.submitEvents}
          titleVal={this.state.title}
          descVal={this.state.description}
          timeVal={this.state.time}
        />
        <Main
          calenderEvents={this.state.calenderEvents}
          theData={this.state.theData}
        />
      </div>
    );
  }
}

export default Body;
