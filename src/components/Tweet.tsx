import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/121310442?v=4"
        alt="Brennon Junio"
      />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Brennon Junio</strong>
          <span>@brennonJunio</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ea
          soluta adipisci voluptatem incidunt accusamus vero laboriosam est,
          temporibus tempore vel cum tenetur porro facilis.
        </p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
