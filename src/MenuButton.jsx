import menuIcon from "./menuIcon.svg";
function MenuButton({ toggleMenu }) {
  return (
    <div className="MenuButton">
      <img
        src={menuIcon}
        style={{ width: 100, height: 100 }}
        onClick={toggleMenu}
      />
    </div>
  );
}

export default MenuButton;
