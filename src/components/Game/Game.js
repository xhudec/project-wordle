import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import useWordle from "../../hooks/useWordle";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
  const { guesses, currentGuessIndex, addGuess, status } = useWordle({
    answer,
  });

  return (
    <>
      <div className="guess-results">
        <GuessResults guesses={guesses} answer={answer} />
      </div>
      <GuessForm disabled={status.hasGameEnded} onSubmit={addGuess} />

      {status.hasWon && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{currentGuessIndex} guesses</strong>.
          </p>
        </div>
      )}

      {status.hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}

      <hr />

      <h2>DEBUG</h2>
      <pre>{JSON.stringify({ guesses, status }, null, 2)}</pre>
    </>
  );
}
