import React from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function GridPostList() {
  return (
    <>
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-5xl">
      {/* <li key="" className="relative min-w-80 h-80">
        <Link
          to=""
          className="flex rounded-[24px] border border-dark-4 overflow-hidden cursor-pointer w-full h-full"
        >
          <img
            src="/icons/posts.svg"
            alt="post"
            className="h-full w-full object-cover"
          />
        </Link>

        <div className="absolute bottom-0 p-5 flex items-center justify-between w-full bg-gradient-to-t from-dark-3 to-transparent rounded-b-[24px] gap-2">
          <div className="flex items-center justify-start gap-2 flex-1">
            <img
              src="/icons/profile-placeholder.svg"
              alt="creator"
              className="w-8 h-8 rounded-full"
            />
            <p className="line-clamp-1">Post Creator Name</p>
          </div>
        </div>
      </li> */}
      <li>
        <PostCard />
      </li>
      <li>
        <PostCard />
      </li>
      <li>
        <PostCard />
      </li>
      <li>
        <PostCard />
      </li>
    </ul>
    </>
  );
}