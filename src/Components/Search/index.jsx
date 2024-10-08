import React, { useState } from 'react'
import Sidebar from '../Sidebar'

function Search() {
  const [tracks, setTracks] = useState([])
  const getTracks = async () => {
    let data = await fetch(`https://v1.nocodeapi.com/lilia/spotify/JqeyBlyPfTYfabZC/search?q=doku&type=track`)
    let convertedData = await data.json()
    setTracks(convertedData.tracks.items);
  }
  return (
    <div className="flex">
      <Sidebar/>
      <div className="bg-[#434242] w-full p-[20px] md:ml-[300px] ml-[250px]">
        <form action="" className="flex justify-center items-center gap-[3px]">
          <input type="text" placeholder="Search..." className="md:px-[10px] md:py-[10px] md:text-[19px] text-[black] radius md:w-full p-[10px]" />
          <button className="md:text-[20px] border md:p-[8px] radiusS p-[10px]">Search</button>
        </form>
        <div>
          <button onClick={getTracks}>get Data</button>
        </div>
        <div>
          <div className="flex justify-center items-center flex-wrap w-full">
            {
              tracks.map((e) => {
                return (
                  <div key={e.id}>
                    <img src={e.album.images[0].url} alt="" className="w-[250px]" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search