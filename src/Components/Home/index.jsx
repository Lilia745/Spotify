import React from 'react'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { FcLikePlaceholder } from 'react-icons/fc'
import { FaAudible } from 'react-icons/fa'

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bgColor w-full md:ml-[300px] ml-[250px]">
        <div className=" flex items-center p-[49px] gap-[70px]">
          <div className="flex items-center  w-[200px] p-[15px] rounded-[5px] hover:bg-[#80808050] shadow">
            <div className="bacground">
              <FcLikePlaceholder />
            </div>
            <a href="https://open.spotify.com/collection/tracks">
              <span className="md:text-[19px] text-[white] font-bold">Liked Songs</span>
            </a>
          </div>
          <div className="flex items-center w-[200px] p-[15px] rounded-[5px] hover:bg-[#80808050] shadow">
            <div className="bg-[#004638] p-[10px] rounded-[5px] mr-[10px]">
              <FaAudible />
            </div>
            <span className="md:text-[19px] text-[white] font-bold cursor-pointer">
              Your Episodes
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home