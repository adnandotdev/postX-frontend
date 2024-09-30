import GridPostList from "../../components/GridPostList";
import React from "react";

export default function Saved() {
  return (
    <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
          <h2 className="h3-bold md:h2-bold text-left w-full text-3xl font-bold">Saved</h2>
      </div>

      <ul className="w-full flex justify-center max-w-5xl gap-9">
        {/* <p className="text-light-4">No available posts</p> */}
        <GridPostList />
      </ul>
    </div>
  );
}