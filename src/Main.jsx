import Item from "./Item";

function Main({
  includeWeekend,
  tasks,
  updateTasks,
  startHour,
  endHour,
  handleClickTask,
}) {
  const dropdownHours = [
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
  ];

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
        gridTemplateRows: `100px repeat(${endHour - startHour + 1}, 1fr)`,
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
      {dropdownHours.map((e, index) => {
        if (index >= startHour && index <= endHour) {
          return (
            <div
              key={e}
              className="Hour"
              style={{ gridColumn: 1, gridRow: `${index - startHour + 2}` }}
            >
              <p>{e}</p>
            </div>
          );
        }
      })}
      {tasks.map((day, dayIndex) =>
        day.map((hour, hourIndex) => {
          if (includeWeekend || dayIndex < 5) {
            if (hourIndex >= startHour && hourIndex <= endHour) {
              return (
                <Item
                  key={`${dayIndex}-${hourIndex}`}
                  day={dayIndex}
                  hour={hourIndex}
                  startHour={startHour}
                  endHour={endHour}
                  handleClickTask={handleClickTask}
                />
              );
            }
          } else {
            return null;
          }
        })
      )}
    </main>
  );
}

export default Main;
