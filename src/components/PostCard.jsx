import { Link } from "react-router-dom";
import PostStats from "./PostStats";

export default function PostCard() {
  return (
    <div className="bg-dark-2 rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="">
        <div className="flex items-center gap-3">
          <Link to={`/profile/`}>
            <img
              src="/icons/profile-placeholder.svg"
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="text-base font-medium lg:text-lg lg:font-bold text-light-1">
              Post Creator Name
            </p>
            <div className="flex items-center gap-2 text-light-3">
              <p className="text-sm font-semibold lg:text-base lg:font-regular">
                date
              </p>
              •
              <p className="text-sm font-semibold lg:text-base lg:font-regular">
                Location
              </p>
            </div>
          </div>
        </div>

        
      </div>

      <Link to={`/posts/`}>
        <div className="text-sm font-medium lg:text-base lg:font-medium py-5">
          <p>Post Caption</p>
          <ul className="flex gap-1 mt-2">
            <li key={``} className="text-light-3 text-sm font-regular">
              #tags
            </li>
          </ul>
        </div>
      </Link>

      <div className="w-full">
        <img
          src="/icons/posts.svg"
          alt="post image"
          className="w-full h-auto rounded-[24px] object-cover mb-5"
        />
      </div>
      <PostStats />
    </div>
  );
}