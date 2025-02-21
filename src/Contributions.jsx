import React from "react";

const GitHubStats = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <h2>🤗 My GitHub Stats</h2> */}
      <h2>
  <span role="img" aria-label="Heart Emoji">🤗</span> My GitHub Stats
</h2>
      <img
        src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ntthanh2603&theme=default"
        style={{ width: "780px" }}
        alt="GitHub Profile Summary"
      />
      <div>
        <img
          alt="Nguyen Tuan Thanh's GitHub stats"
          src="https://github-readme-stats.vercel.app/api?username=ntthanh2603&show_icons=true&theme=default"
        />
        <img
          alt="Top langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=ntthanh2603&layout=compact&&langs_count=8&ttheme=default"
          style={{ height: "195px" }}
        />
      </div>
      <h2>
  <span role="img" aria-label="Heart Emoji">💖</span> My Contributions
</h2>
      <div >
        <img alt="snake eating my contributions" src="https://raw.githubusercontent.com/ntthanh2603/ntthanh2603/output/github-contribution-grid-snake.svg" />
      </div>
    </div>
  );
};

export default GitHubStats;
