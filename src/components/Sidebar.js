import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarHeader">Schedulizer</div>
        <form className="sidebarBody" onSubmit={this.props.submitEvents}>
          <input
            onChange={this.props.changeTitle}
            type="text"
            placeholder=" Title..."
            name="title"
            className="title"
            value={this.props.titleVal}
          />
          <input
            onChange={this.props.changeDescription}
            type="text"
            placeholder=" Description..."
            name="description"
            className="description"
            value={this.props.descVal}
          />
          <input
            onChange={this.props.changeTime}
            type="text"
            placeholder=" Time..."
            name="time"
            className="time"
            value={this.props.timeVal}
          />
          <button className="submit">Add Event</button>
        </form>
      </div>
    );
  }
}

export default Sidebar;
