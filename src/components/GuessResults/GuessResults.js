import React from "react";

import Guess from "../Guess/Guess";

export default function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guessItem) => (
        <Guess key={guessItem.id} guess={guessItem.value} answer={answer} />
      ))}
    </div>
  );
}
