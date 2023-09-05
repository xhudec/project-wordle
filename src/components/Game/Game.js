import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    setGuesses((state) => [
      ...state,
      {
        id: crypto.randomUUID(),
        value: guess.toUpperCase(),
      },
    ]);
  }

  return (
    <>
      <ul>
        {guesses.map((guess) => (
          <li key={guess.id}>
            <p>{guess.value}</p>
          </li>
        ))}
      </ul>
      <GuessForm onSubmit={addGuess} />
    </>
  );
}
