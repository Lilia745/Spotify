import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FcLikePlaceholder } from "react-icons/fc";

function Sidebar() {
  return (
    <div className="bg-[black] text-[white] w-[300px] p-[20px]">
      <Link to="/">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
          alt=""
          className="w-[200px]"
        />
      </Link>
      <div className="p-[5px] text-[20px] mt-[20px] w-full hover:bg-[#747474b5] rounded-[5px]">
        <Link to="/home" className="flex  items-center">
          <AiOutlineHome className="mr-[10px]" />
          <span>Home</span>
        </Link>
      </div>
      <div className="p-[5px] text-[20px] w-full hover:bg-[#747474b5] rounded-[5px]">
        <Link to="/search" className="flex  items-center">
          <IoIosSearch className="mr-[10px]" />
          <span>Search</span>
        </Link>
      </div>
      <div>
        <Link to="/liked" className="flex  items-center">
          <div className="bacground">
          <FcLikePlaceholder />
          </div>
          <span>Liked Songs</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
