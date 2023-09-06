import Banner from "../Banner";

export default function WinBanner({ numberOfAttempts }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfAttempts} guess{numberOfAttempts > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
}
