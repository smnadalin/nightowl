function Item({ key, day, hour, startHour, handleClickTask }) {
  return (
    <div
      className="Item"
      onClick={handleClickTask}
      key={key}
      style={{
        gridRow: `${2 + hour - startHour}`,
        gridColumn: `${2 + day}`,
      }}
    ></div>
  );
}

export default Item;
