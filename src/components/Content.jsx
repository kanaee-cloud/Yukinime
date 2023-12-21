import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Loading from "./Loading";
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
                  <div className="flex items-center justify-center lg:justify-start md:mt-0 space-x-3">
                    <h1 className="font-bold text-[15px] lg:text-lg md:text-xl">
                      {anime.title}
                    </h1>
                    <h1 className="text-accent border border-accent px-3 py-[2px] text-md rounded-md opacity-80">
                      {anime.type}
                    </h1>
                  </div>
                  <p className="text-gray-600 text-[1rem]">
                    Rating: {anime.score}
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
