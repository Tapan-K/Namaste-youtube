import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  // new code
  const searchResults = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    // <div className="flex flex-wrap">
    //   <AdVideoCard info={videos[10]} />
    //   {videos.map((video) => (
    //     <Link to={"/watch?v=" + video.id}>
    //       <VideoCard key={video.id} info={video} />
    //     </Link>
    //   ))}
    // </div>
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[10]} />
      {searchResults.length > 0
        ? searchResults.map((video) => (
            <Link to={"/watch?v=" + video.id.videoId}>
              <VideoCard key={video.id.videoId} info={video} />
            </Link>
          ))
        : videos.map((video) => (
            <Link to={"/watch?v=" + video.id}>
              <VideoCard key={video.id} info={video} />
            </Link>
          ))}
    </div>
  );
};

export default Videocontainer;
