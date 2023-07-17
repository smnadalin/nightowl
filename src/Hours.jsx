function Hours({ hours }) {
  return (
    <div className="Hours">
      {hours.map((e) => (
        <div className="Hour">
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
}

export default Hours;
