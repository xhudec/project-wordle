import React, { useCallback, useMemo } from "react";
import { checkGuess } from "../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

const INITIAL_GUESS_STATE = Array(NUM_OF_GUESSES_ALLOWED)
  .fill(null)
  .map(() => ({
    id: crypto.randomUUID(),
    value: "",
    letterScore: [],
  }));

export default function useWordle({ answer }) {
  const [guesses, setGuesses] = React.useState(INITIAL_GUESS_STATE);
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);

  const addGuess = useCallback(
    (guess) => {
      if (currentGuessIndex === NUM_OF_GUESSES_ALLOWED) {
        window.alert("You have reached a guess limit (6 attempts)");

        return;
      }

      if (
        guesses.some((guessItem) => guessItem.value === guess.toUpperCase())
      ) {
        window.alert("You have already tried this word.");

        return;
      }

      const transformedGuess = guess.toUpperCase();

      setGuesses((state) =>
        state.map((guessItem, index) =>
          index === currentGuessIndex
            ? {
                ...guessItem,
                value: transformedGuess,
                letterScore: checkGuess(transformedGuess, answer),
              }
            : guessItem
        )
      );
      setCurrentGuessIndex((state) => state + 1);
    },
    [answer, currentGuessIndex]
  );

  const hasWon = useMemo(() => {
    return guesses.some(
      (guess) =>
        guess.value.length === 5 &&
        guess.letterScore.every((letterScore) => letterScore.status === "correct")
    );
  }, [guesses]);
  const hasLost = currentGuessIndex === NUM_OF_GUESSES_ALLOWED;
  const hasGameEnded = hasWon || hasLost;

  return {
    guesses,
    currentGuessIndex,
    addGuess,
    status: {
      hasWon,
      hasLost,
      hasGameEnded,
    },
  };
}
