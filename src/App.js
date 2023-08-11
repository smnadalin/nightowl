import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [includeWeekend, setIncludeWeekend] = useState(true);

  const colours = [
    { colour: "Red", colourHex: "#7d294b" },
    { colour: "Green", colourHex: "#3d7880" },
    { colour: "Pink", colourHex: "#85547d" },
    { colour: "Purple", colourHex: "#59297d" },
    { colour: "Blue", colourHex: "#29417d" },
    { colour: "Yellow", colourHex: "#7d7d29" },
  ];

  const GenerateTasksArray = () => {
    const outerArray = Array(7);
    for (let i = 0; i < 7; i++) {
      const innerArray = Array(13);
      for (let j = 0; j < 13; j++) {
        innerArray[j] = {
          taskName: null,
          taskDescription: null,
          colour: null,
          colourHex: null,
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
    valid: false,
    touched: false,
  });

  const updateTasks = (action) => {
    const updatedTasks = [...tasks];
    if (action === "add") {
      updatedTasks[modalData.day][modalData.hour] = {
        taskName: modalData.taskName,
        taskDescription: modalData.taskDescription,
        colour: modalData.colour,
        colourHex: getColourHex(modalData.colour),
      };
    } else if (action === "delete") {
      updatedTasks[modalData.day][modalData.hour] = {
        taskName: null,
        taskDescription: null,
        colour: null,
        colourHex: null,
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
    const item = event.currentTarget;
    const itemDay = item.getAttribute("day");
    const itemHour = item.getAttribute("hour");
    const itemTasks = tasks[itemDay][itemHour];
    console.log(itemTasks);
    if (itemTasks.taskName === null) {
      setModalData({
        taskName: "",
        taskDescription: "",
        day: itemDay,
        hour: itemHour,
        colour: "Red",
        colourHex: colours["Red"],
        valid: false,
        touched: false,
      });
    } else {
      console.log("I've been triggered");
      setModalData({
        ...itemTasks,
        day: itemDay,
        hour: itemHour,
        valid: true,
        touched: true,
      });
    }
    setModalOpen(true);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const handleModalSave = (event) => {
    updateTasks("add", event);
    setModalOpen(false);
  };

  const handleModalChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    if (inputName === "TaskName") {
      const valid = inputValue !== "";
      setModalData({
        ...modalData,
        taskName: inputValue,
        touched: true,
        valid: valid,
      });
    } else if (inputName === "TaskDescription") {
      setModalData({
        ...modalData,
        taskDescription: inputValue,
      });
    } else {
      setModalData({ ...modalData, colour: inputValue });
    }
  };

  const getColourHex = (colourName) => {
    const index = colours.findIndex((e) => e.colour === colourName);
    return colours[index].colourHex;
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
          handleModalChange={handleModalChange}
        />
      ) : null}
    </div>
  );
}

export default App;
