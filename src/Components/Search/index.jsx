import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import Footer from '../Footer'

const CLIENT_ID = "9db7e1af62bc455aa276bc3c19353531"
const CLIENT_SECRET = "22f70b583ca24e1196a1323f3e64baf4"

function Search() {
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [accessToken,setAccessToken] = useState("")

  useEffect(()=>{
    let parameters = {
      method:"POST",
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch(`https://accounts.spotify.com/api/token`,parameters)
    .then(res => res.json())
    .then(data => setAccessToken(data.access_token))
  },[])

  async function search() {
    console.log("Search" + searchInput);
  }

  if (loading ) return <Loader/>
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#2d2d2d] w-full p-[20px] md:ml-[300px] ml-[250px]">
        <div className="flex justify-start items-center mb-[20px] gap-[3px]">
          <form action="" className="flex justify-center items-center">
            <input onKeyPress={e => {
              if (e.key == "Enter") {
                e.preventDefault()
                search()
              }
            }}onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Artists..." className="md:px-[10px] md:py-[9.5px] md:text-[19px] text-[black] radius md:w-full p-[10px]" />
          </form>
          <button onClick={search}  className="text text-[white] md:text-[20px] border md:p-[8px] radiusS p-[10px] hover:bg-[#9e9d9dc1]">Search</button>
        </div>
        <div>
          <div className="flex justify-center items-center flex-wrap w-full gap-[20px]">
            {
              // tracks.map((e) => {
              //   return (
              //     <a href="https://open.spotify.com/user/315couvazk3vnrjzmp4yfsego7aa">
              //       <div key={e.id} className="relative cursor-pointer item flex justify-center items-center flex-col img bg-[#ffffff34]">
              //       <img src={e.album.images[0].url} alt="" className="w-full img absolute top-0" />
              //       <div className="p-[10px] absolute bottom-0">
              //         <h5 className="text-[19px]  cursor-pointer hover:text-[#1ED760] m-[5px] text">{e.name}</h5>
              //         <p className="  text-[20px] m-[5px] hover:text-[white] name">Artists:   {e.album.artists[0].name}</p>
              //         <p className=" text-[15px] m-[5px] hover:text-[white] name">Release Date:   {e.album.release_date}</p>
              //         <audio src={e.preview_url} controls className="w-[250px]"></audio>
              //       </div>
              //     </div>
              //     </a>
              //   )
              // })
            }
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Search