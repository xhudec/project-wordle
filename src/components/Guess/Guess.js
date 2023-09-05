import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const EMPTY_GUESS_ARRAY = range(0, 5, 1);

export default function Guess({ guess, answer }) {
  const letterStatus = React.useMemo(() => {
    if (!guess) {
      return EMPTY_GUESS_ARRAY;
    }

    return checkGuess(guess, answer);
  });

  return (
    <p className="guess">
      {letterStatus.map((letterStatus, index) => (
        <span key={index} className={`cell ${letterStatus?.status ?? ""}`.trim()}>
          {letterStatus?.letter ?? ""}
        </span>
      ))}
    </p>
  );
}
