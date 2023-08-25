import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./Anim";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const playTone = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    // Play tone on every render
    playTone();

    const timeout = setTimeout(() => {
      if (index < words.length - 1) {
        setIndex(index + 1);
      }
    }, index === 0 ? 1000 : 150);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={`h-[100vh] w-full flex items-center justify-center fixed z-[999] bg-[#141516]`}
    >
      {dimension.width > 0 && (
        <>
          <motion.p className="flex text-white text-[42px] items-center absolute z-[1]" variants={opacity} initial="initial" animate="enter">
            <span className="block text-white w-[10px] h-[10px] bg-dark rounded-[50px] mr-[10px]"></span>
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
