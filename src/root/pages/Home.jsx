import React from "react";
import PostCard from "../../components/PostCard";

export default function Home() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
        <div className="max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9">
        <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/icons/home.svg"
          width={40}
          height={40}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full text-3xl font-bold">Home Feed</h2>
        </div>
          <ul className="flex flex-col flex-1 gap-9 w-full">
            <PostCard />
            <PostCard />
            <PostCard />
          </ul>
        </div>
      </div>

      {/* <div className="hidden xl:flex flex-col w-72 2xl:w-465 px-6 py-10 gap-10 overflow-scroll custom-scrollbar">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        <ul className="grid 2xl:grid-cols-2 gap-6">
          <UserCard />
        </ul>
      </div> */}
    </div>
  );
}