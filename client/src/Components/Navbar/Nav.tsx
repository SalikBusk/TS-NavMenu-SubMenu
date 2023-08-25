import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../Anim/Anim';
import Body from './Body';
import Footer from './Footer';

import Image from '../Image'

import imageIndex from '../../Assets/index'

interface LinkItem {
    title: string;
    href: string;
    src: string;
}

const links: LinkItem[] = [
    {
        title: "Home",
        href: "/",
        src: imageIndex.home
    },
    {
        title: "Gallary",
        href: "/shop",
        src: imageIndex.gallary 
    },
    {
        title: "About Us",
        href: "/about",
        src: imageIndex.about 
    },
    {
        title: "Tours",
        href: "/tours",
        src: imageIndex.tours
    },
    {
        title: "Contact",
        href: "/contact",
        src: imageIndex.contact
    }
];

const Nav = () => {
    const [selectedLink, setSelectedLink] = useState({
        isActive: false,
        index: 0,
    });

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className='hidden'>
            <div className='flex flex-row gap-[50px] justify-between'>
                <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </motion.div>
    );
};

export default Nav;
