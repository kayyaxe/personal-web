"use client";

import { useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaQuestionCircle,
  FaRandom,
  FaUser,
} from "react-icons/fa";
import Hobbies from "../../components/Hobbies";

export default function HobbiesPlaylist() {
  const [playing, setPlaying] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [shuffledHobbies, setShuffledHobbies] = useState(Hobbies);
  const audioRefs = useRef([]);

  const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    if (playing === index) {
      currentAudio.pause();
      setPlaying(null);
    } else {
      if (playing !== null && audioRefs.current[playing]) {
        audioRefs.current[playing].pause();
      }
      currentAudio.play();
      setPlaying(index);
    }
  };

  const shuffleHobbies = () => {
    const shuffled = [...Hobbies].sort(() => Math.random() - 0.5);
    setShuffledHobbies(shuffled);
  };

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <main className="p-8 sm:p-20 flex flex-col items-center justify-center w-full md:p-20 bg-base-200 text-base-content transition-all duration-500">
      <section className="text-left w-full max-w-full sm:max-w-xs md:max-w-xl lg:max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary flex justify-start items-center gap-2 ">
          From Labs to Loops
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-base-content/80">
          With a Chemical Engineering background from NTU, I’m now transitioning
          into software engineering. My passion for problem-solving has led me
          to explore the world of code, and I’m excited to build innovative
          solutions through programming.
        </p>
      </section>

      <section className="mt-12 w-full max-w-full sm:max-w-xs md:max-w-xl lg:max-w-3xl">
        <div className="list bg-base-100 rounded-box shadow-md max-h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-300">
          <div className="flex justify-center lg:justify-center lg:flex-shrink-0">
            <img
              src="collage.jpg"
              alt="collage"
              className="py-4 w-40 h md:w-70 md:h-70 lg:w-90 lg:h-90 max-w-full h-auto"
            />
          </div>

          <p className="pb-2 text-lg opacity-80 w-full tracking-wider font-extrabold text-primary uppercase text-center">
            <span className="text-2xl sm:text-4xl">🎶</span>{" "}
            <span
              style={{ fontFamily: '"Fatmono", sans-serif' }}
              className="font-extrabold text-2xl sm:text-3xl"
            >
              Hobbies Playlist
            </span>
          </p>
          <p className="text-xs font-mono sm:text-base flex justify-between items-center px-4 py-2 text-base-content/80 bg-base-300 rounded-lg mb-3">
            <span className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span className="font-bold">Kar</span>
            </span>
            <span className="sm:text-base opacity-80">Total: 18m 36s </span>
            <button
              onClick={shuffleHobbies}
              className="flex items-center gap-1 p-2 rounded-md bg-primary text-base-100 hover:bg-primary-focus transition-all"
            >
              <FaRandom /> Shuffle
            </button>
          </p>

          {shuffledHobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-1 md:gap-4 p-4 border-b border-base-200 last:border-0 hover:bg-base-200 transition-all rounded-lg"
            >
              <div>
                <img
                  className="w-16 h-16 sm:w-10 sm:h-10 rounded-full shadow-md"
                  src={hobby.img}
                  alt={hobby.title}
                />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm sm:text-base md:text-lg">
                  {hobby.title}
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base">
                  {hobby.desc}
                </div>

                {expanded === index && (
                  <div className="opacity-60 sm:text-sm">{hobby.details}</div>
                )}
              </div>

              <button
                onClick={() => togglePlay(index)}
                className="p-2 rounded-full hover:bg-primary/20 transition-all"
              >
                {playing === index ? (
                  <FaPause className="text-sm md:text-base lg:text-lg" />
                ) : (
                  <FaPlay className="text-sm md:text-base lg:text-lg" />
                )}
              </button>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={hobby.song}
              />

              <button
                onClick={() => toggleExpand(index)}
                className="p-2 rounded-full hover:bg-primary/20 transition-all"
              >
                <FaQuestionCircle className="text-sm md:text-base lg:text-lg" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
