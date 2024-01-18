import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import "./newscard.css";

const NewsCard = ({
  index,
  article: { description, publishedAt, source, title, url, urlToImage },
}) => {
  return (
    <Card className="each-news-card">
      <CardActionArea href={url} target="_blank">
        <CardMedia
          style={{ height: 250 }}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
        />
        <div className="each-news-card-date-details">
          <p>{new Date(publishedAt).toDateString()}</p>
          <p>{source.name}</p>
        </div>
        <div className="news-each-card-title">{title}</div>
        <CardContent>
          <p className="news-each-card-description">{description}</p>
        </CardContent>
      </CardActionArea>
      <CardActions className="news-each-card-action-container">
        <Button size="small" color="primary" href={url}>
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
