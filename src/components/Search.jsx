import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
import Loading from "./Loading";
import Footer from "./Footer";
import Content from "./Content";

const Search = () => {
  const navigate = useNavigate();
  const [anime, setAnime] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [clicked, setClicked] = useState(false);

  console.log(anime);

  const btnClick = (animeKey) => {
    axios
      .get(`https://nice-puce-capris.cyclic.app/anime?name=${animeKey}`)
      .then((d) => setAnime(d.data));
    setClicked(true);
  };

  const thisObject = (obj) => {
    return (
      typeof obj === "object" &&
      Object.prototype.toString.call(obj) === "[object Object]"
    );
  };

  return (
    <>
      <header className="py-8 bg-header">
        <div className="container mx-auto">
          <div className="flex lg:justify-between items-center">
            <a
              href="/"
              className="font-bold font-primary text-[1.5rem] lg:text-[2rem]"
            >
              Yuki<span className="text-accent">nime!</span>
            </a>
            <div className="flex ml-10 gap-x-2 lg:static">
              <input
                type="text"
                className="w-full rounded-lg border-[2px] bg-transparent border-opacity-20 outline-none text-white text-opacity-60 py-1 px-3 text-sm lg:text-[1rem]"
                placeholder="Search anime"
                onKeyDown={(e) =>
                  e.keyCode === 13 ? btnClick(e.target.value) : null
                }
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                onClick={() => btnClick(keyword)}
                className="btn btn-sm font-primary font-semibold"
              >
                <IoIosSearch size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-5 text-white p-3">
        {anime.length <= 0 && clicked == false ? (
          <>
            <Content />
          </>
        ) : null}
        {clicked === true ? (
          thisObject(anime) ? (
            <AnimeDetails anime={anime} />
          ) : (
            <Loading />
          )
        ) : null}
      </div>
      <br />
      <br />
      <Footer isAnimeObject={thisObject(anime)}/>
    </>
  );
};

export default Search;
