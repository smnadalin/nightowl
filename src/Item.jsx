function Item({ key, day, hour, startHour, handleClickTask, task }) {
  return (
    <div
      className="Item"
      onClick={handleClickTask}
      key={key}
      day={day}
      hour={hour}
      style={{
        gridRow: `${2 + hour - startHour}`,
        gridColumn: `${2 + day}`,
      }}
    >
      {task.taskName === null ? null : <h1>Hello</h1>}
    </div>
  );
}

export default Item;
