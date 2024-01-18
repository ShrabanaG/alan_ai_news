import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import alanAILogo from "./assets/alan-ai-logo.png";

import NewsCards from "./components/NewsCards/NewsCards";

import "./App.css";
import { Card, CardContent } from "@mui/material";

const alanLogoCardContent = [
  {
    content: "Try saying:",
    subContent: "Open article number [4]",
  },
  {
    content: "Try saying: ",
    subContent: "Go back",
  },
];

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      {/* <h2>Alan AI Voice Assistance</h2> */}/
      <div className="alan-ai-logo-container">
        {newsArticles.length ? (
          <div className="alan-ai-info-card-container">
            {alanLogoCardContent.map((eachContent, index) => {
              const { content, subContent } = eachContent;
              return (
                <Card
                  sx={{ minWidth: 200 }}
                  className="each-logo-card"
                  key={index}
                >
                  <CardContent className="each-logo-card-content">
                    <p>
                      {content}
                      <br />
                      <br />
                      {subContent}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : null}
        <img src={alanAILogo} alt="logo" />
      </div>
      <div>
        <NewsCards articles={newsArticles} />
      </div>
    </div>
  );
}

export default App;
