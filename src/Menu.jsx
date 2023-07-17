import MenuButton from "./MenuButton";

function Menu({ menuState, toggleMenu }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <nav className="Menu">
      <MenuButton toggleMenu={toggleMenu} />
      {menuState ? (
        <div>
          <h1>Settings:</h1>
          <h2>Days:</h2>
          {days.map((e) => (
            <div>
              <input type="checkbox" id={e} name={e} />
              <label for={e}>{e}</label>
            </div>
          ))}
        </div>
      ) : null}
    </nav>
  );
}

export default Menu;
