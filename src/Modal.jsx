function Modal({ modalData, handleModalCancel, handleModalSave }) {
  const hours = [
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
    <div className="Modal">
      <div className="ModalContent">
        <h1>{`Task for ${hours[modalData.hour]} on ${days[modalData.day]}`}</h1>
        <div className="InputContainer">
          <label htmlFor="TaskName">Task Name</label>
          <input id="TaskName" />
          <label htmlFor="TaskDescription">Task Description</label>
          <textarea id="TaskDescription" />
          <label>Colour</label>
          <select>
            <option>Red</option>
          </select>
        </div>
        <div className="ButtonContainer">
          <button className="CancelButton" onClick={handleModalCancel}>
            Cancel
          </button>
          <button className="SaveButton" onClick={handleModalSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
