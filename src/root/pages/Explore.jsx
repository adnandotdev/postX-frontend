import React from 'react';
import GridPostList from '../../components/GridPostList';

export default function Explore() {
  return (
    <div className="flex flex-col flex-1 items-center overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="max-w-5xl flex flex-col items-center w-full gap-6 md:gap-9">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/icons/wallpaper.svg"
          width={40}
          height={40}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full text-3xl font-bold">Explore</h2>
        </div>
        
      </div>

      <div className="flex justify-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>

        <div className="flex items-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>
      <GridPostList />
    </div>
  );
}