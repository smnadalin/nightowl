import MenuButton from "./MenuButton";
import { useState } from "react";

function Menu({ menuState, toggleMenu, days, updateDays, hours, updateHours }) {
  const selectableDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
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

  const handleStartHourChange = (startHour, hours) => {
    const startHourIndex = findIndexOfHour(startHour);
    const endHourIndex = findIndexOfHour(hours[hours.length - 1]);
    if (startHourIndex > endHourIndex) {
      setStartHourValid(false);
    } else {
      setStartHourValid(true);
      updateHours(startHourIndex, endHourIndex);
    }
  };
  const handleEndHourChange = (endHour, hours) => {
    const startHourIndex = findIndexOfHour(hours[0]);
    const endHourIndex = findIndexOfHour(endHour);
    if (endHourIndex < startHourIndex) {
      setEndHourValid(false);
    } else {
      setEndHourValid(true);
      updateHours(startHourIndex, endHourIndex);
    }
  };

  const handleDayChange = (event) => {
    const checked = event.target.checked;
    const id = event.target.id;
    if (checked) {
      updateDays([...days, id]);
    } else {
      const index = days.indexOf(id);
      updateDays(days.toSpliced(index, 1));
    }
  };

  return (
    <nav className="Menu">
      <MenuButton toggleMenu={toggleMenu} />
      {menuState ? (
        <div>
          <h1>Settings:</h1>
          <h2>Days:</h2>
          {selectableDays.map((e) => (
            <div>
              <input
                type="checkbox"
                id={e}
                name={e}
                checked={days.includes(e)}
                onChange={handleDayChange}
              />
              <label for={e}>{e}</label>
            </div>
          ))}
          <h1>Time:</h1>
          <div>
            <label for="StartTime">Start Time:</label>
            <select
              name="StartTime"
              id="StartTime"
              value={hours[0]}
              onChange={(e) => handleStartHourChange(e.target.value, hours)}
            >
              {dropdownHours.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label for="EndTime">End Time:</label>
            <select
              name="EndTime"
              id="EndTime"
              value={hours[hours.length - 1]}
              onChange={(e) => handleEndHourChange(e.target.value, hours)}
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
