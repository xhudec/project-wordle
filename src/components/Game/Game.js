import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import useWordle from "../../hooks/useWordle";
import WinBanner from "../WinBanner";
import LostBanner from "../LostBanner";

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

      {status.hasWon && <WinBanner numberOfAttempts={currentGuessIndex} />}
      {status.hasLost && <LostBanner answer={answer} />}
    </>
  );
}
