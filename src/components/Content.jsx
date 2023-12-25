import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Loading from "./Loading";
import { FaStar } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/top/anime?limit=10"
        );
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {animeList.length > 0 ? (
        <div className="flex flex-col mx-auto">
          <h1 className="font-bold mb-4">Top 10 Anime </h1>
          {animeList.map((anime) => (
            <Link
              to={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="justify-between px-4 mb-8"
            >
              <div className="flex border border-opacity-30 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-start md:mt-0 space-x-3">
                    <h1 className="font-bold text-[12px] lg:text-lg md:text-xl">
                      {anime.title}
                    </h1>
                    <h1 className="text-accent border text-[12px] border-accent px-3 py-[2px] font-semibold text-md rounded-md opacity-80">
                      {anime.type}
                    </h1>
                  </div>
                  <p className="flex items-center gap-x-2 text-[12px] lg:text-[1rem] text-white justify-start">
                    <FaStar className="items-center mb-1 text-accent text-[1.3rem]" />
                    {anime.score}
                  </p>
                  <p className="flex items-center gap-x-2 text-[10px] lg:text-[1rem] text-white justify-start">
                    <PiTelevision className="items-center mb-1 text-blue-300 text-[1.4rem]" />
                    {anime.aired.string}
                  </p>
                  <p className="flex items-center gap-x-2 text-[10px] lg:text-[1rem] text-white justify-start">
                    <IoMdPerson className="items-center mb-1 text-[#F99417] text-[1.4rem]" />
                    {anime.members}
                  </p>

                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AnimeList;
