import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Loader from "../Loader";
import Footer from "../Footer";
import Swal from "sweetalert2";

const clientId = "98fb5c7ee08b40ec84030b690bb22916";
const clientSecret = "18790cbf37484e338f685450c718d576";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
    if (searchInput === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nothing is searched for",
      })
    }
  }, []);

  async function search() {
    setIsLoading(true);

    const artistParameters = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?offset=0&limit=50&include_groups=album,single,compilation,appears_on`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => setAlbums(data.items));
    setIsLoading(false);
  }


  if (isLoading) return <Loader />;

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#2d2d2d] w-full p-[20px] md:ml-[300px] ml-[250px]">
        <div className="flex justify-start items-center mb-[76px] gap-[3px]">
          <form
            action=""
            className="flex justify-center items-center w-[100%] gap-[2px]"
          >
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={e => {
                if (e.key == "Enter") {
                  if (searchInput === "") {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Nothing is searched for",
                    })
                  } else {
                    search()
                    e.preventDefault()
                  }
                }
              }}
              type="text"
              placeholder="Artists..."
              className="md:w-[100%] md:px-[10px] md:py-[9.5px] md:text-[19px] text-[black] radius p-[10px]"
            />
            <button
              onClick={search}
              className="text text-[white] md:text-[20px] border md:p-[8px] radiusS p-[10px] hover:bg-[#9e9d9dc1]"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <div className="flex justify-center items-center flex-wrap w-full gap-[20px]">
            {albums?.map((e, id) => {
              return (
                <a
                  key={"album" + id}
                  href={e.external_urls.spotify}
                >
                  <div
                    key={e.id}
                    className="relative cursor-pointer item flex justify-center items-center flex-col img bg-[#ffffff34]"
                  >
                    <img
                      src={e.images[0].url}
                      alt=""
                      className="w-full img absolute top-0"
                    />
                    <div className="p-[10px] absolute bottom-0">
                      <h5 className="text-[19px]  cursor-pointer hover:text-[#1ED760] m-[5px] text">
                        {e.name}
                      </h5>
                      <p className="  text-[20px] m-[5px] hover:text-[white] name">
                        Artists:{" "}
                        {e.name}
                      </p>
                      <p className=" text-[15px] m-[5px] hover:text-[white] name">
                        Release Date: {e.release_date}
                      </p>
                      <audio
                        src={e.preview_url}
                        controls
                        className="w-[250px]"
                      ></audio>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Search;