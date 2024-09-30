import { Link } from "react-router-dom";
import React from "react";
export default function UserCard() {
  return (
    <Link
      to=""
      className="flex flex-wrap md:flex-wrap sm:flex-col items-center justify-between gap-4 border border-dark-4 rounded-[20px] px-4 py-8 w-full"
    >
      <img
        src="/icons/profile-placeholder.svg"
        alt="creator"
        className="rounded-full w-12 h-12"
      />

      <div className="flex flex-col gap-1 flex-grow min-w-0">
        <p className="text-[16px] font-medium leading-[140%] text-light-1 line-clamp-1 flex-shrink-0">
          FULL NAME
        </p>
        <p className="text-[14px] text-light-3 line-clamp-1">
          @username
        </p>
      </div>

      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-600 text-light-1 flex gap-2 lg:px-5 px-3 py-2 rounded-lg transition-colors duration-300 "
      >
        Follow
      </button>
    </Link>
  );
}