import "./Forms.css";
export function Forms() {
  function createNewTweet(event) {
    event.preventDefault();
    console.log("event");
  }
  return (
    <form onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img
          src="https://avatars.githubusercontent.com/u/121310442?v=4"
          alt="Brennon Junio"
        />
        <textarea id="tweet" placeholder="What's Happening?" />
      </label>
      <button type="submit">Tweet</button>
    </form>
  );
}
