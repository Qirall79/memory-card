import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Score from "./components/Score";
import Footer from "./components/Footer";

import chrollo from "./images/Chrollo_Lucilfer.webp";
import feitan from "./images/Feitan_Portor.webp";
import illumi from "./images/Illumi_Zoldyck.webp";
import shizuku from "./images/Shizuku_Murasaki.webp";
import bonolenov from "./images/Bonolenov_Ndongo.webp";
import franklin from "./images/Franklin_Bordeau.webp";
import kalluto from "./images/Kalluto_Zoldyck.webp";
import nobunaga from "./images/Nobunaga_Hazama.webp";
import phinks from "./images/Phinks_Magcub.webp";
import machi from "./images/Machi_Komacine.webp";

function App() {
  let [images, setImg] = useState([
    { img: chrollo, key: 0, name: "Chrollo Lucifer" },
    { img: feitan, key: 1, name: "Feitan Portor" },
    { img: bonolenov, key: 2, name: "Bonolenov Ndongo" },
    { img: franklin, key: 3, name: "Franklin Bordeau" },
    { img: illumi, key: 4, name: "Illumi Zoldyck" },
    { img: kalluto, key: 5, name: "Kalluto Zoldyck" },
    { img: machi, key: 6, name: "Machi Komacine" },
    { img: nobunaga, key: 7, name: "Nobunaga Hazama" },
    { img: phinks, key: 8, name: "Phinks Magcub" },
    { img: shizuku, key: 9, name: "Shizuku Murasaki" },
  ]);

  let [currentScore, setScore] = useState(0);
  let [maxScore, setMax] = useState(0);
  let [clicked, setClicked] = useState([]);

  const handleClick = (e) => {
    const key = parseInt(e.target.dataset.key);
    if (clicked.includes(key)) {
      setMax(currentScore > maxScore ? currentScore : maxScore);
      setScore(0);
      setClicked([]);
    } else {
      setScore(currentScore + 1);
      setClicked([...clicked, key]);
    }
  };

  const randArr = () => {
    let arr = [];

    while (arr.length < 10) {
      let n = Math.floor(Math.random() * 10);
      if (!arr.includes(n)) arr.push(n);
    }
    const randImg = arr.map((i) => {
      return images[i];
    });
    setImg(randImg);
  };

  useEffect(() => {
    randArr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore, maxScore]);

  return (
    <div className="App min-h-screen bg-[url('./images/genei-ryudan.jpg')]  bg-cover bg-center">
      <div className="bg-gradient-to-b from-black to-transparent">
        <Navbar />
        <Score current={currentScore} max={maxScore} />
        <div className="w-full  min-h-[60vh] px-16 py-12 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 place-items-center">
          {images.map((member) => {
            return (
              <div className="cursor-pointer hover:scale-125 transition-all border border-black w-[200px] h-[280px] flex-cols items-center text-center bg-gray-900 bg-opacity-75">
                <img
                  className="w-full mb-6"
                  src={member.img}
                  onClick={handleClick}
                  data-key={member.key}
                  alt="Member"
                />
                <p className="text-white font-semibold">{member.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
