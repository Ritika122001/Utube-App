import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "300px", md: "320px" },
        boxShadow: "none",
        borderRadius: 2
      }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "300px", md: "320px" }, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px"
        }}>
        <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={`/channel/${snippet?.channelId}`}
          style={{ textDecoration: "none" }}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{
                fontSize: 12,
                color: "gray",
                ml: "5px"
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
