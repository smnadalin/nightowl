import Hours from "./Hours";

function Main({ days, hours }) {
  return (
    <main className="Main">
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
