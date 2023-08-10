import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);

  const [includeWeekend, setIncludeWeekend] = useState(true);

  const GenerateTasksArray = () => {
    const outerArray = Array(7);
    for (let i = 0; i < 7; i++) {
      const innerArray = Array(13);
      for (let j = 0; j < 13; j++) {
        innerArray[j] = {
          taskName: null,
          taskDescription: null,
          colour: null,
        };
      }
      outerArray[i] = innerArray;
    }
    return outerArray;
  };

  const [tasks, setTasks] = useState(GenerateTasksArray());
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(12);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    taskName: "",
    taskDescription: "",
    colour: "",
    day: "",
    hour: "",
  });

  const updateTasks = (action) => {
    const updatedTasks = [...tasks];
    if (action === "add") {
      updatedTasks[modalData.day][modalData.hour] = {
        taskName: modalData.taskName,
        taskDescription: modalData.taskDescription,
        colour: modalData.colour,
      };
    } else if (action === "delete") {
      updatedTasks[modalData.day][modalData.hour] = {
        taskName: null,
        taskDescription: null,
        colour: null,
      };
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

  const handleClickTask = (event) => {
    const item = event.target;
    const itemDay = item.getAttribute("day");

    const itemHour = item.getAttribute("hour");
    console.log(`item day : ${itemDay}`);
    console.log(`item hour : ${itemHour}`);
    setModalOpen(true);
    setModalData({ ...modalData, day: itemDay, hour: itemHour });
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const handleModalSave = () => {
    updateTasks("add");
    setModalOpen(false);
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
        startHour={startHour}
        endHour={endHour}
        handleClickTask={handleClickTask}
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
      {modalOpen ? (
        <Modal
          modalData={modalData}
          handleModalCancel={handleModalCancel}
          handleModalSave={handleModalSave}
        />
      ) : null}
    </div>
  );
}

export default App;
