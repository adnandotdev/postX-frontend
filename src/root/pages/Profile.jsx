import {
  Route,
  Routes,
  Link,
  Outlet,
  useLocation
} from "react-router-dom";

import LikedPosts from "./LikedPosts";
import GridPostList from "../../components/GridPostList";

const StatBlock = ({ value, label }) => (
  <div className="flex items-center gap-2">
    <p className="text-[14px] font-semibold leading-[140%] tracking-tighter text-primary-500 lg:text-[18px] lg:font-bold">{value}</p>
    <p className="text-[14px] font-medium leading-[140%] text-light-2 lg:text-[16px] lg:font-medium">{label}</p>
  </div>
);

export default function Profile() {
  const { pathname } = useLocation();
  // const { id } = useParams();
  // const { user } = useUserContext();
  // const { pathname } = useLocation();

  // const { data: currentUser } = useGetUserById(id || "");

  // if (!currentUser)
  //   return (
  //     <div className="flex items-center justify-center w-full h-full">
  //       <Loader />
  //     </div>
  //   );

  return (
    <div className="flex flex-col items-center flex-1 gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="flex items-center md:mb-8 xl:items-start gap-8 flex-col xl:flex-row relative max-w-5xl w-full">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src="/icons/profile-placeholder.svg"
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left text-[24px] font-bold leading-[140%] tracking-tighter md:text-[36px] md:font-semibold w-full">
                Current User Name
              </h1>
              <p className="text-[14px] font-normal leading-[140%] text-light-3 text-center xl:text-left md:text-[18px] md:font-medium">
                @username
              </p>
            </div>

            <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
              <StatBlock value={15} label="Posts" />
              <StatBlock value={290} label="Followers" />
              <StatBlock value={320} label="Following" />
            </div>

            <p className="text-[14px] font-medium leading-[140%] text-center xl:text-left mt-7 max-w-screen-sm md:text-[16px] md:font-medium">
              Bio
            </p>
          </div>

          <div className="flex justify-center gap-4">
            {/* <div className={`${user.id !== currentUser.$id && "hidden"}`}> */}
              <Link
                to={`/update-profile/`}
                className={`h-10 bg-dark-4 px-5 text-light-1 flex items-center justify-center gap-2 rounded-lg`}>
                  {/* ${
                  user.id !== currentUser.$id && "hidden"
                } */}
                <img
                  src={"/icons/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="flex whitespace-nowrap text-[14px] font-medium leading-[140%]">
                  Edit Profile
                </p>
              </Link>
            {/* </div> */}
            {/* <div className={`${user.id === id && "hidden"}`}> */}
              <button
                 type="button"
                 className="h-10 bg-indigo-500 hover:bg-indigo-600 text-light-1 flex gap-2 lg:px-5 px-3 py-2 rounded-lg transition-colors duration-300 "
                >
                Follow
              </button>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* {currentUser.$id === user.id && ( */}
        <div className="flex justify-center max-w-5xl w-full">
          <Link
            to={`/profile/`}
            className="flex items-center justify-center gap-3 py-4 w-48 bg-dark-2 transition flex-1 xl:flex-initial rounded-l-lg"
            // className={`profile-tab rounded-l-lg ${
            //   pathname === `/profile/` && "!bg-dark-3"
            // }`}
            >
            <img
              src={ pathname === '/profile/' ? "/icons/postsdark.svg" : "/icons/posts.svg" }
              alt="posts"
              width={20}
              height={20}
            />
            Posts
          </Link>
          <Link
            to={`/profile/liked-posts`}
            className="flex items-center justify-center gap-3 py-4 w-48 bg-dark-2 transition flex-1 xl:flex-initial rounded-r-lg"
            // className={`profile-tab rounded-r-lg ${
            //   pathname === `/profile/liked-posts` && "!bg-dark-3"
            // }`}
            >
            <img
              src={ pathname === '/profile/liked-posts' ? "/icons/likedark.svg" : "/icons/like.svg" }
              alt="like"
              width={20}
              height={20}
            />
            Liked
          </Link>
        </div>
      {/* )} */}

      <Routes>
        <Route index element={<GridPostList />}/>
        
        <Route path="/liked-posts" element={<LikedPosts />} />
          
      </Routes>
      <Outlet />
    </div>
  );
};