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

  submitEvents = e => {
    var keyVal = new Date().getTime();
    var randColor = this.getRandomColor();
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
