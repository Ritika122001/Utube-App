import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { FetchApi } from "../utils/FetchApi";

const ChannelDetail = () => {
  const [channelDetail, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail);

  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );

    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,22,54,1) 31%, rgba(22,24,55,1) 33%, rgba(31,34,63,1) 40%, rgba(65,76,96,1) 91%, rgba(82,105,110,1) 100%, rgba(44,87,110,0.7458333675266982) 100%)",
            zIndex: 10
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />

        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
