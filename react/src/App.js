import React, { useState } from "react";

function getNumbers() {}

const App = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = getNumbers();
  const [tries, setTries] = [];

  const onSubmitForm = () => {};

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={answer} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {["like", "like", "like"].map(() => {
          return <li>like</li>;
        })}
      </ul>
    </>
  );
};

export default App;
