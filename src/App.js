import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const possibleDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const [days, setDays] = useState([...possibleDays]);
  const possibleHours = [
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
  const [hours, setHours] = useState([...possibleHours]);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const updateHours = (startHour, endHour) => {
    const newHours = possibleHours.slice(startHour, endHour + 1);
    setHours(newHours);
  };

  const sortDays = (days) => {
    const sortedArray = days.sort(
      (a, b) => possibleDays.indexOf(a) - possibleDays.indexOf(b)
    );
    return sortedArray;
  };

  const updateDays = (newDays) => {
    const sortedDays = sortDays(newDays);
    setDays(sortedDays);
  };

  return (
    <div
      className="App"
      style={
        menuState
          ? { gridTemplateColumns: "1fr 400px" }
          : { gridTemplateColumns: "1fr 100px" }
      }
    >
      <Header />
      <Main days={days} hours={hours} />
      <Menu
        menuState={menuState}
        toggleMenu={toggleMenu}
        days={days}
        updateDays={updateDays}
        hours={hours}
        updateHours={updateHours}
      />
    </div>
  );
}

export default App;
