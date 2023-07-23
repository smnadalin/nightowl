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

  const GenerateTasksArray = () => {
    const outerArray = Array(7);
    for (let i = 0; i < 7; i++) {
      const innerArray = Array(13);
      for (let j = 0; j < 13; j++) {
        innerArray[j] = null;
      }
      outerArray[i] = innerArray;
    }
    return outerArray;
  };

  const [tasks, setTasks] = useState(GenerateTasksArray());

  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(12);

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
    setStartHour(startHour);
    setEndHour(endHour);
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
        includeWeekend={includeWeekend}
        tasks={tasks}
        updateTasks={updateTasks}
        startHour={startHour}
        endHour={endHour}
      />
      <Menu
        menuState={menuState}
        toggleMenu={toggleMenu}
        includeWeekend={includeWeekend}
        toggleWeekend={toggleWeekend}
        updateHours={updateHours}
        startHour={startHour}
        endHour={endHour}
      />
    </div>
  );
}

export default App;
