import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const [includeWeekend, setIncludeWeekend] = useState(true);

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
  const [tasks, setTasks] = useState([...Array(7)].map((e) => Array(13)));

  const updateTasks = (action, data) => {
    const updatedTasks = [...tasks];
    if (action === "add") {
      updatedTasks[data.day][data.hour] = data;
    } else if (action === "delete") {
      updatedTasks[data.day][data.hour] = null;
    }
    setTasks(updatedTasks);
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const toggleWeekend = () => {
    setIncludeWeekend(!includeWeekend);
  };

  const updateHours = (startHour, endHour) => {
    const newHours = possibleHours.slice(startHour, endHour + 1);
    setHours(newHours);
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
      <Main
        hours={hours}
        includeWeekend={includeWeekend}
        tasks={tasks}
        updateTasks={updateTasks}
      />
      <Menu
        menuState={menuState}
        toggleMenu={toggleMenu}
        includeWeekend={includeWeekend}
        toggleWeekend={toggleWeekend}
        hours={hours}
        updateHours={updateHours}
      />
    </div>
  );
}

export default App;
