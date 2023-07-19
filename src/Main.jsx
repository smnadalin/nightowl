import Hours from "./Hours";

function Main({ days, hours }) {
  return (
    <main
      className="Main"
      style={{ gridTemplateColumns: `100px repeat(${days.length}, 1fr)` }}
    >
      <div className="HoursHeader"></div>
      {days.map((e) => (
        <div className="Days">
          <h1>{e}</h1>
        </div>
      ))}
      <Hours hours={hours} />
      {days.map((e) => (
        <div className="Days"></div>
      ))}
    </main>
  );
}

export default Main;
