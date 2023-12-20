import React from "react";

const Footer = ({ isAnimeObject }) => {
  return (
    <footer className={
        isAnimeObject
          ? "text-center p-3 bg-footer text-white"
          : "absolute bottom-0 left-0 right-0 text-center p-3 bg-footer text-white"
      }>
      <div className="text-center mt-5">
        <a href="/" className="font-medium font-primary text-[2rem]">
          Fate<span className="text-accent">.co</span>
        </a>
        <h1 className="mt-5 text-[1rem]">
          Data from {" "}
          <a href="myanimelist.net" className="underline">
            Myanimelist.net
          </a>
        </h1>
        <hr className="my-3 opacity-20" />
        <p className="text-[0.9rem] opacity-30">
            Copyright © 2024 - Fate.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
