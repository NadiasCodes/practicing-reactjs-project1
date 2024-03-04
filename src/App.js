import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [origin, setOrigin] = useState("");
  const [displayCharacter, setdisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1>Build a hero</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>Origin: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setOrigin(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setdisplayCharacter(true);
        }}
      >
        Display Data
      </button>
      <div>
        <h1>Data:</h1>
        {displayCharacter && (
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>Origin: {origin}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
