import MenuButton from "./MenuButton";
import { useState } from "react";

function Menu({
  menuState,
  toggleMenu,
  includeWeekend,
  toggleWeekend,
  updateHours,
  startHour,
  endHour,
}) {
  const dropdownHours = [
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
  ];

  const [startHourValid, setStartHourValid] = useState(true);
  const [endHourValid, setEndHourValid] = useState(true);

  const findIndexOfHour = (hour) => {
    const indexOfHour = dropdownHours.indexOf(hour);
    return indexOfHour;
  };

  const handleStartHourChange = (startHour) => {
    const startHourIndex = findIndexOfHour(startHour);
    const endHourIndex = endHour;
    if (startHourIndex > endHourIndex) {
      setStartHourValid(false);
    } else {
      setStartHourValid(true);
      updateHours(startHourIndex, endHourIndex);
    }
  };

  const handleEndHourChange = (endHour) => {
    const startHourIndex = startHour;
    const endHourIndex = findIndexOfHour(endHour);
    if (endHourIndex < startHourIndex) {
      setEndHourValid(false);
    } else {
      setEndHourValid(true);
      updateHours(startHourIndex, endHourIndex);
    }
  };

  return (
    <nav className="Menu">
      <MenuButton toggleMenu={toggleMenu} />
      {menuState ? (
        <div
          className={`MenuContainer ${
            menuState ? "MenuContainerOpen" : "MenuContainerClosed"
          }`}
        >
          <h1>Settings:</h1>
          <div>
            <label htmlFor="Weekend">Include Weekends</label>
            <input
              className="InputWeekend"
              style={{ marginLeft: "10px" }}
              type="checkbox"
              id="Weekend"
              name="Weekend"
              checked={includeWeekend}
              onChange={toggleWeekend}
            />
          </div>
          <h1>Time:</h1>
          <div className="StartEndTimeContainer">
            <label htmlFor="StartTime">Start Time:</label>
            <select
              name="StartTime"
              id="StartTime"
              value={dropdownHours[startHour]}
              onChange={(e) => handleStartHourChange(e.target.value)}
            >
              {dropdownHours.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div className="StartEndTimeContainer">
            <label htmlFor="EndTime">End Time: </label>
            <select
              name="EndTime"
              id="EndTime"
              value={dropdownHours[endHour]}
              onChange={(e) => handleEndHourChange(e.target.value)}
            >
              {dropdownHours.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Menu;
