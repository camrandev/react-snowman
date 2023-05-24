import React from "react";

function WrongGuesses({ wrong }) {
  return (
    <div>
      <h1>Number Wrong: { wrong }</h1>
    </div>
  );
}

export default WrongGuesses;