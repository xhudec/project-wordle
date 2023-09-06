import React from "react";
import { range } from "../../utils";

const EMPTY_GUESS_ARRAY = range(0, 5, 1);

export default function Guess({ guess }) {
  const letterArray = guess.letterStatus.length === 5 ? guess.letterStatus : EMPTY_GUESS_ARRAY

  return (
    <p className="guess">
      {letterArray.map((letterStatus, index) => (
        <span key={index} className={`cell ${letterStatus?.status ?? ""}`.trim()}>
          {letterStatus?.letter ?? ""}
        </span>
      ))}
    </p>
  );
}
