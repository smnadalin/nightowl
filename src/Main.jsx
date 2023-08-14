import Item from "./Item";

function Main({ includeWeekend, tasks, startHour, endHour, handleClickTask }) {
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
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <main
      className={`Main ${includeWeekend ? "MainWeekend" : "MainNoWeekend"}`}
      style={{
        gridTemplateRows: `40px repeat(${
          endHour - startHour + 1
        }, calc((100% - 48px - ${endHour - startHour + 1} * 4px) / ${
          endHour - startHour + 1
        }))`,
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
        } else {
          return null;
        }
      })}
      {tasks.map((day, dayIndex) =>
        day.map((hour, hourIndex) => {
          if (includeWeekend || dayIndex < 5) {
            if (hourIndex >= startHour && hourIndex <= endHour) {
              return (
                <Item
                  keyName={`${dayIndex}-${hourIndex}`}
                  day={dayIndex}
                  hour={hourIndex}
                  startHour={startHour}
                  endHour={endHour}
                  handleClickTask={handleClickTask}
                  task={hour}
                />
              );
            } else {
              return null;
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
