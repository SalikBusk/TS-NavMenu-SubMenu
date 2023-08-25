import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { opacity, background } from "../Anim/Anim";
import Nav from "./Nav";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Container from "../Container";

const Logo = () => {
  return (
    <Link className="text-black absolute left-0" to="/">
      Buski
    </Link>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-[#f4f0ea] fixed w-full box-border p-[10px]">
      <Container>
        <div className="flex justify-between uppercase text-[12px] font-[400] relative">
          {/* logo - items-start */}
          <div>
            <Logo />
          </div>
          {/* nav (burger) - item-end */}
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="flex items-center justify-center gap-[8px] cursor-pointer"
          >
            <div className="relative flex items-center">
              <motion.p className="m-0" variants={opacity}>
                {isActive ? (
                  <div className="cursor-pointer">
                    <RxCross2 size={20} />
                  </div>
                ) : (
                  <div className="cursor-pointer">
                    <RxHamburgerMenu size={20} />
                  </div>
                )}
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="bg-black opacity-[0.5] h-screen w-full absolute left-0 top-[100%]"
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
