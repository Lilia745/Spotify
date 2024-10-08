import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaAudible } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import List from "../List";

function Sidebar() {
  return (
    <div className="bg-[black] text-[white] md:w-[300px] w-[250px] p-[20px] fixed h-[100%]">
      <Link to="/">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
          alt=""
          className="w-[120px] md:w-[150px]"
        />
      </Link>
      <div className="p-[5px] text-[20px] mt-[20px] w-full hover:bg-[#747474b5] rounded-[5px]">
        <Link to="/" className="flex  items-center">
          <AiOutlineHome className="mr-[10px]" />
          <span>Home</span>
        </Link>
      </div>
      <div className="p-[5px] text-[20px] w-full hover:bg-[#747474b5] rounded-[5px] mb-[30px]">
        <Link to="/search" className="flex  items-center">
          <IoIosSearch className="mr-[10px]" />
          <span>Search</span>
        </Link>
      </div>
      <div>
        <div className="flex items-center mb-[20px]">
          <div className="bg-[white] p-[10px] rounded-[5px] mr-[10px]">
          <FaPlus className="text-[black]"/>
          </div>
          <span className="md:text-[19px]">Create Playlist</span>
        </div>
        <div className="flex items-center">
        <div className="bacground">
          <FcLikePlaceholder />
          </div>
          <a href="https://open.spotify.com/collection/tracks">
          <span className="md:text-[19px]">Liked Songs</span>
          </a>
        </div>
        <div className="flex items-center mt-[20px]">
          <div className="bg-[#004638] p-[10px] rounded-[5px] mr-[10px]">
          <FaAudible />
          </div>
          <span className="md:text-[19px]">
          Your Episodes
          </span>
        </div>
      </div>
      <List/>
    </div>
  );
}

export default Sidebar;
