import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { CgStudio } from "react-icons/cg";
import { MdMovie } from "react-icons/md";

const AnimeDetails = ({ anime }) => {
  return (
    <div className="lg:flex max-w-6xl mx-auto lg:space-x-10">
      <div className="md:flex flex-col border-2 border-gray-500 border-opacity-30 rounded-md p-3">
        <img
          src={anime.anime.picture}
          alt={anime.anime.title}
          className="rounded-md object-cover mx-auto md:mx-0"
        />
        <hr className="my-3 opacity-20" />
        <div className="flex flex-col">
          <h1 className="font-medium text-accent">Alternative Title</h1>
          <hr className="my-1 opacity-20" />
          <p className="text-sm opacity-70">
            Synonims : {anime.anime.synonyms}
          </p>
          <p className="text-sm opacity-70">
            English : {anime.anime.englishTitle}
          </p>
          <p className="text-sm opacity-70">
            Japanese : {anime.anime.japaneseTitle}
          </p>
          <hr className="my-3 opacity-20" />
          <h1 className="font-medium text-accent">Information</h1>
          <hr className="my-1 opacity-20" />
          <p className="text-sm opacity-70">Types : {anime.anime.type}</p>
          <p className="text-sm opacity-70">
            Episodes : {anime.anime.episodes}
          </p>
          <p className="text-sm opacity-70">Aired : {anime.anime.aired}</p>
          <p className="text-sm opacity-70">
            Producers :
            {anime.anime.producers.map((producers, i) => {
              return (
                <p
                  key={i}
                  className="text-justify underline text-sm md:text-md"
                >
                  {producers}
                </p>
              );
            })}
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center lg:justify-start mt-4 md:mt-0 space-x-3">
          <h1 className="font-bold text-lg md:text-xl">{anime.anime.title}</h1>
          <h1 className="text-accent px-3 py-[2px] text-md rounded-md opacity-80">
            {anime.anime.type}
          </h1>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          {anime.anime.genres.map((genres, i) => (
            <p
              key={i}
              className="opacity-60 px-2 lg:ml-0 mt-2 text-[12px] lg:text-sm border-accent border-[2px] border-opacity-50 rounded-md"
            >
              {genres}
            </p>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 text-xl border-2 border-gray-500 border-opacity-30 rounded-md p-3">
          <div className="lg:flex lg:justify-between lg:space-x-10">
            <div className="lg:flex flex-col">
              <div className="flex items-center space-x-3 mb-3">
                <FaStar
                  className="relative top-[-2px] fill-yellow-500"
                  size={30}
                />
                <p className="font-medium flex gap-x-1">
                  {anime.anime.score}
                  <p className="text-[12px] opacity-30">
                    ({anime.anime.scoreStats})
                  </p>
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <FaRankingStar size={30} className="fill-blue-600" />
                <p className="font-medium">Ranked : {anime.anime.ranked}</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <IoMdPerson size={30} className="fill-purple-600" />
                <p className="font-medium">Members : {anime.anime.members}</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <CgStudio size={30} className="fill-[#55e2e9]" />
                <p className="font-medium">Studio : {anime.anime.studios}</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <MdMovie size={30} className="fill-[#55e2e9]" />
                <p className="font-medium">
                  Premiered : {anime.anime.premiered}
                </p>
              </div>
              <div>
                <button className="btn-on btn-medium flex items-center">
                  <FaRegHeart size={20} />
                  <p className="mx-auto">Add to favorite</p>
                </button>
              </div>
            </div>
            <div className="mt-5 lg:mt-0">
              <iframe
                src={anime.anime.trailer}
                frameborder="0"
                className="w-full lg:w-[500px] h-[300px] rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
        <p
          className="overflow-scroll text-justify font-normal lg:w-[850px] h-[350px] mt-2 opacity-80 pr-3"
          style={{ whiteSpace: "pre-line" }}
        >
          {anime.anime.synopsis}
        </p>
      </div>
    </div>
  );
};

export default AnimeDetails;
