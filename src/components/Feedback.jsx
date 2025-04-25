import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(e){
    if(e.key == 'Enter'){
        setShow(true)
    }
  }

  return (
    <div>
      <h4 style={{ color: "white" }}>Input value: {show && input.current.value}</h4>
      <input
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
        ref={input}
      />
    </div>
  );
}

export default function Feedback() {
  const [from, setFrom] = useState({
    name: "",
    reason: "help",
    hasError: false,
  });

  function handleNameChange(event) {
    setFrom((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length == 0,
    }));
  }

  return (
    <section>
      <h3 style={{ color: "white" }}>Обратная связь</h3>
      <form>
        <label htmlFor="name">Your name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Name..."
          className="control"
          value={from.name}
          style={{ border: from.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />
        <br />
        <select
          name="reason"
          className="control"
          value={from.reason}
          onChange={(event) => {
            setFrom((prev) => ({ ...prev, reason: event.target.value }));
          }}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <br />
      </form>
      <Button disabled={from.hasError}>Отправить</Button>
      {/* <pre>
        Name: {from.name}
        <br />
        Reason: {from.reason}
      </pre> */}
      <StateVsRef />
    </section>
  );
}
