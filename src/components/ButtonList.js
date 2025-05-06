import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Podcast",
  "Web Development",
  "Satsang",
  "Rosting",
  "Thoughts",
  "News",
  "Comedy",
  "Eggs",
  "Survival skills",
  "Campsites",
  "Mixes",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
