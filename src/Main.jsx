function Main({ hours, includeWeekend, tasks, updateTasks }) {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <main
      className="Main"
      style={{
        gridTemplateColumns: `100px repeat(${includeWeekend ? 7 : 5}, 1fr)`,
        gridTemplateRows: `100px repeat(${hours.length}, 1fr)`,
      }}
    >
      <div className="HoursHeader"></div>
      {days.map((e, index) => {
        if (includeWeekend || index < 5) {
          return (
            <div className="Days" key={e}>
              <h1>{e}</h1>
            </div>
          );
        } else {
          return null;
        }
      })}
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
