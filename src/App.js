import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [days, setDays] = useState([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]);
  const [hours, setHours] = useState([
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
  ]);

  const toggleMenu = () => {
    setMenuState(!menuState);
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
      <Menu menuState={menuState} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
