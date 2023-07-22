function Main({ days, hours, tasks, updateTasks }) {
  return (
    <main
      className="Main"
      style={{
        gridTemplateColumns: `100px repeat(${days.length}, 1fr)`,
        gridTemplateRows: `100px repeat(${hours.length}, 1fr)`,
      }}
    >
      <div className="HoursHeader"></div>
      {days.map((e) => (
        <div className="Days">
          <h1>{e}</h1>
        </div>
      ))}
      {hours.map((e, index) => (
        <div
          className="Hour"
          style={{ gridColumn: 1, gridRow: `${1 + hours[index]}` }}
        >
          <p>{e}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;
