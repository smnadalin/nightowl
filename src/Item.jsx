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
        backgroundColor: task.colour === null ? `#252525` : task.colourHex,
      }}
    >
      {task.taskName === null ? null : <p>{task.taskName}</p>}
    </div>
  );
}

export default Item;
