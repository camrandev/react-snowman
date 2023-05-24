import React from "react";

function Button({ restartGame }) {
  return (
    <button
      onClick={restartGame}>
        Restart
    </button>
  )
}

export default Button