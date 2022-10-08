import React, { useState } from "react";
import "./App.css";
// import Thanks from "./Thanks";

function App() {
  const [item, setItem] = useState({
    userName: "",
    password: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setItem((item.userName = value));
  };

  const passwordHandler = (e) => {
    const pass = e.target.value;
    setItem((item.password = pass));
  };

  return (
    <>
      <form action="">
        <div className="container">
          <label htmlFor="item">UserName: </label>
          <input
            type="text"
            name="item"
            className="text"
            placeholder="Enter Your Name..."
            value={item.userName}
            onChange={inputHandler}
          />
          <br />
          <label htmlFor="pass">Password: </label>
          <input
            type="password"
            name="pass"
            className="pasword"
            placeholder="Enter Your Password..."
            value={item.password}
            onChange={passwordHandler}
          />
          <br />
          <button
            onClick={() =>
              alert(
                `Thanks For Submission!!`
              )
            }
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
