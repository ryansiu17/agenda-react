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
            className="title"
            value={this.props.titleVal}
          />
          <input
            onChange={this.props.changeDescription}
            type="text"
            placeholder=" Description..."
            className="description"
            value={this.props.descVal}
          />
          <div className="time">
            <select
              className="hour"
              onChange={this.props.changeHour}
              value={this.props.hourVal}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            <select
              className="minute"
              onChange={this.props.changeMinute}
              value={this.props.minuteVal}
            >
              <option value="00">00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
            <select
              className="ampm"
              onChange={this.props.changeAmpm}
              value={this.props.ampmVal}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <button className="submit">Add Event</button>
        </form>
      </div>
    );
  }
}

export default Sidebar;
