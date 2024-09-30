import React, { useState } from "react";

export default function PostStats() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  }
  const handleSaveClick = () => {
    setSaved(!saved);
  }
  return (
    <div
      className={`flex justify-between items-center z-20 `}>
      <div className="flex gap-2 mr-5">
        <img
          src={ liked ? "/icons/liked.svg" : "/icons/like.svg"}
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleLikeClick}
        />
        <p className="small-medium lg:base-medium">99</p>
      </div>

      <div className="flex gap-2">
        <img
          src={ saved ? "/icons/saved.svg" : "/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleSaveClick}
        />
      </div>
    </div>
  );
};
