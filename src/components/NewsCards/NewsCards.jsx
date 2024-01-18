import { Grid, Grow } from "@mui/material";
import NewsCard from "./NewsCard/NewsCard";

import "./newscards.css";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles }) => {
  return !articles.length ? (
    <Grow in>
      <Grid
        className="info-card-container"
        container
        alignItems="stretch"
        spacing={3}
      >
        {infoCards.map((infoCard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className="each-info-card">
            <div
              className="each-info-card-container"
              style={{ backgroundColor: infoCard.color }}
            >
              <h5>{infoCard.title}</h5>
              {infoCard.info ? (
                <h6>
                  <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                  {infoCard.info}
                </h6>
              ) : null}
              <h6>
                <strong>Try saying: </strong>
                <br /> <i>{infoCard.text}</i>
              </h6>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  ) : (
    <Grow in>
      <Grid container className="news-cards-container">
        {articles
          .filter((article) => {
            if (
              !article.source.name ||
              !article.description ||
              !article.title ||
              article.description === "[Removed]"
            ) {
              return false;
            } else {
              return true;
            }
          })
          .map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard index={index} article={article} />
            </Grid>
          ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
