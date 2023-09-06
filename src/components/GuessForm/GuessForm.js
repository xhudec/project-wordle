import React from "react";

export default function GuessForm({ disabled, onSubmit }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5}"
        title="Must be 5 letters"
        disabled={disabled}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}
