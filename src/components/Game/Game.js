import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const INITIAL_GUESS_STATE = Array(NUM_OF_GUESSES_ALLOWED)
  .fill(null)
  .map(() => ({
    id: crypto.randomUUID(),
    value: "",
  }));

export default function Game() {
  const [guesses, setGuesses] = React.useState(INITIAL_GUESS_STATE);
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);

  function addGuess(guess) {
    if (currentGuessIndex === NUM_OF_GUESSES_ALLOWED) {
      window.alert("You have reached a guess limit (6 attempts)");

      return;
    }

    if (guesses.some(guessItem => guessItem.value === guess.toUpperCase())) {
      window.alert('You have already tried this word.')

      return
    }

    setGuesses((state) =>
      state.map((guessItem, index) =>
        index === currentGuessIndex
          ? {
              ...guessItem,
              value: guess.toUpperCase(),
            }
          : guessItem
      )
    );
    setCurrentGuessIndex((state) => state + 1);
  }

  return (
    <>
      <div className="guess-results">
        <GuessResults guesses={guesses} />
      </div>
      <GuessForm onSubmit={addGuess} />

      <hr />

      <h2>DEBUG</h2>
      <pre>{JSON.stringify(guesses, null, 2)}</pre>
    </>
  );
}
