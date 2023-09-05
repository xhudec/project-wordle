import React from "react";
import { range } from "../../utils";

const EMPTY_GUESS_ARRAY = range(0, 5, 1);

export default function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.length === 5
        ? guess.split("").map((guessLetter, letterIndex) => (
            <span key={letterIndex} className="cell">
              {guessLetter}
            </span>
          ))
        : EMPTY_GUESS_ARRAY.map((_value, index) => (
            <span key={index} className="cell" />
          ))}
    </p>
  );
}
