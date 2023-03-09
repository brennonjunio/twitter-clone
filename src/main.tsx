import React from "react";
import ReactDOM from "react-dom/client";
import "./components/global.css"; // importacao do css <<<<-----
import { Sparkle } from "phosphor-react";
import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeLine">
          <div className="timeLine-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://avatars.githubusercontent.com/u/121310442?v=4"
                alt="Brennon Junio"
              />
              <textarea id="tweet" placeholder="What's Happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <div className="separator"></div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
