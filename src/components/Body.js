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
      { title: "hello", description: "bazinga haha", time: "900" },
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
  submitEvents = e => {
    var keyVal = new Date().getTime();
    e.preventDefault();
    const newArray = {
      title: this.state.title,
      description: this.state.description,
      time: this.state.time,
      key: keyVal
    };
    this.setState({
      calenderEvents: [...this.state.calenderEvents, newArray]
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
