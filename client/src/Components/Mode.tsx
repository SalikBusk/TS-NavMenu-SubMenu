import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DarkMode = () => {
  const [theme, setTheme] = useState(getInitialThee());
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function getInitialThee() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

  const handleThemeSwitcher = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
        className="switch"
        data-isOn={isOn}
        onClick={() => {
            toggleSwitch();
            handleThemeSwitcher();
        }}
    >
      <motion.div 
        layout
        transition={spring}
        className="handle bg-[#333] dark:bg-primary"
      />
    </div>
  );
};

export default DarkMode;
