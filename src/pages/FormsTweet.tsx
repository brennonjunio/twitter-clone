import "./FormsTweet.css";
export function FormsTweet() {
  return (
    <form className="answer-teet-form">
      <label htmlFor="tweet">
        <img
          src="https://avatars.githubusercontent.com/u/121310442?v=4"
          alt="Brennon Junio"
        />
        <textarea id="tweet" placeholder="Tweet your answer" />
      </label>
      <button type="submit">Answer</button>
    </form>
  );
}
