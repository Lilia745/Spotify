import React, { useEffect, useState } from 'react'
import * as Sentry from "@sentry/browser"
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import Footer from '../Footer'

function Search() {
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    getTracks()
  }, [])

  const getTracks = async () => {
    setLoading(true)
    let data = await fetch(`https://v1.nocodeapi.com/lilia/spotify/JqeyBlyPfTYfabZC/search?q=${keyword === "" ? "miyagi" : keyword}&type=track`)
    let convertedData = await data.json()
    setTracks(convertedData.tracks.items);
    setLoading(false)
  }

//   const makeLotsOfRequests = async (action, n) =>{
//     for (let i = 0; i <= n; i++) {
//       const result = await action()
//       if (result.status === 429 || result.status ===403) {
//        Sentry.captureException(`${result.status}`) 
//       }
//       const resetInSeconds = result.headers.get("x-ratelimit-reset")
//       if (resetInSeconds !== null) {
//         const nowInSeconds = Math.round(new Date().valueOf() / 1000)
//         const secondsToWait = resetInSeconds - nowInSeconds
//       }
      
//     }
//   }
// console.log(makeLotsOfRequests());


  if (loading) return <Loader />
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#2d2d2d] w-full p-[20px] md:ml-[300px] ml-[250px]">
        <div className="flex justify-start items-center mb-[20px] gap-[3px]">
          <form action="" className="flex justify-center items-center">
            <input value={keyword} onKeyPress={e => {
              if (e.key == "Enter") {
                e.preventDefault()
                getTracks()
              }
            }} onChange={e => setKeyword(e.target.value)} type="text" placeholder="Artists..." className="md:px-[10px] md:py-[9.5px] md:text-[19px] text-[black] radius md:w-full p-[10px]" />
          </form>
          <button onClick={getTracks} className="text text-[white] md:text-[20px] border md:p-[8px] radiusS p-[10px] hover:bg-[#9e9d9dc1]">Search</button>
        </div>
        <div>
          <div className="flex justify-center items-center flex-wrap w-full gap-[20px]">
            {
              tracks.map((e) => {
                return (<a href="https://open.spotify.com/user/315couvazk3vnrjzmp4yfsego7aa">
                  <div key={e.id} className="relative cursor-pointer item flex justify-center items-center flex-col img bg-[#ffffff34]">
                    <img src={e.album.images[0].url} alt="" className="w-full img absolute top-0" />
                    <div className="p-[10px] absolute bottom-0">
                      <h5 className="text-[19px]  cursor-pointer hover:text-[#1ED760] m-[5px] text">{e.name}</h5>
                      <p className="  text-[20px] m-[5px] hover:text-[white] name">Artists:   {e.album.artists[0].name}</p>
                      <p className=" text-[15px] m-[5px] hover:text-[white] name">Release Date:   {e.album.release_date}</p>
                      <audio src={e.preview_url} controls className="w-[250px]"></audio>
                    </div>
                  </div>
                </a>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Search