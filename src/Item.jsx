function Item({ key, day, hour, startHour }) {
  return (
    <div
      className="Item"
      key={key}
      style={{
        gridRow: `${2 + hour - startHour}`,
        gridColumn: `${2 + day}`,
      }}
    ></div>
  );
}

export default Item;
