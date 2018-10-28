import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

class Body extends React.Component {
  state = {
    calenderEvents: [],
    title: "",
    description: "",
    hour: "1",
    minute: "00",
    ampm: "AM",
    error: undefined,
    theData: [
      {
        title: "style time",
        description: "perhaps make a datepicker",
        hour: "1",
        minute: "00",
        ampm: "AM"
      },
      {
        title: "style time",
        description: "perhaps make a datepicker",
        hour: "2",
        minute: "00",
        ampm: "AM"
      },
      {
        title: "style time",
        description: "perhaps make a datepicker",
        hour: "1",
        minute: "00",
        ampm: "PM"
      }
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
  changeHour = e => {
    e.preventDefault();
    this.setState({
      hour: e.target.value
    });
  };
  changeMinute = e => {
    e.preventDefault();
    this.setState({
      minute: e.target.value
    });
  };
  changeAmpm = e => {
    e.preventDefault();
    this.setState({
      ampm: e.target.value
    });
  };

  getRandomBlueColor = () => {
    let blueColors = this.state.blueColors;
    return (blueColors =
      blueColors[Math.floor(Math.random() * blueColors.length)]);
  };

  submitEvents = e => {
    var keyVal = new Date().getTime();
    var randColor = this.getRandomBlueColor();
    e.preventDefault();
    const newArray = {
      title: this.state.title,
      description: this.state.description,
      hour: this.state.hour,
      minute: this.state.minute,
      ampm: this.state.ampm,
      key: keyVal,
      color: randColor
    };
    this.setState({
      calenderEvents: [...this.state.calenderEvents, newArray],
      title: "",
      description: "",
      hour: "1",
      minute: "00",
      ampm: "AM"
    });
  };

  render() {
    return (
      <div className="mainBody">
        <Sidebar
          changeTitle={this.changeTitle}
          changeDescription={this.changeDescription}
          changeHour={this.changeHour}
          changeMinute={this.changeMinute}
          changeAmpm={this.changeAmpm}
          submitEvents={this.submitEvents}
          titleVal={this.state.title}
          descVal={this.state.description}
          hourVal={this.state.hour}
          minuteVal={this.state.minute}
          ampmVal={this.state.ampm}
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
