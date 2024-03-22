"use client"
import Link from "next/link"
import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import Image from "next/image"
import logo from "../../../public/assets/Logo.svg"
import search from "../../../public/assets/search-normal.svg"
import heart from "../../../public/assets/heart.svg"
import profile from "../../../public/assets/profile.svg"
import cart from "../../../public/assets/shopping-bag.svg"
import arrowDown from "../../../public/assets/arrow-left.svg"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "SHOP",
    },
    {
      id: 2,
      link: "SKILLS",
    },
    {
      id: 3,
      link: "STORIES",
    },
    {
      id: 4,
      link: "ABOUT",
    },
    {
      id: 5,
      link: "CONTACT US",
    },
  ]

  return (
    <div className="flex flex-col w-full text-white bg-white h-auto shadow-lg">
      <div className="flex item-center justify-between mt-4 md:mt-[40px] md:px-20 px-3">
        <div className="flex gap-3">
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} className="w-4 h-4 md:h-6 md:w-6"/> : <FaBars size={30} className="w-5 h-5 md:h-6 md:w-6"/>}
          </div>
          <h1>
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src={logo} alt="Logo" width={36} height={36} className="w-5 h-5 md:h-6 md:w-6"/>
            </a>
          </h1>
        </div>
        <div className="text-5xl font-signature">
          <h1 className="text-black font-bold md:text-[36px] text-[20px]">
            LOGO
          </h1>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <h1>
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src={search} alt="search" width={26} height={26} className="w-5 h-5 md:h-6 md:w-6"/>
            </a>
          </h1>
          <h1>
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src={heart} alt="heart" width={26} height={26} className="w-5 h-5 md:h-6 md:w-6"/>
            </a>
          </h1>
          <h1>
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src={cart} alt="cart" width={26} height={26} className="w-5 h-5 md:h-6 md:w-6"/>
            </a>
          </h1>
          <h1>
            <a
              className="link-underline link-underline-black hidden mg:block"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src={profile} alt="profile" width={26} height={26} className="w-5 h-5 md:h-6 md:w-6"/>
            </a>
          </h1>
          <h1>
            <a
              className="link-underline link-underline-black flex flex-row items-center justify-center"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-black text-[16px] font-bold hidden md:block">
                ENG
              </span>
              <Image
                src={arrowDown}
                alt="Language"
                width={36}
                height={36}
                className="hidden md:block"
              />
            </a>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-16 mb-5">
        <ul className="hidden md:flex gap-20">
          {links.map(({id, link}) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-bold text-black  hover:scale-105  duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link}) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-[20px] text-white"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <span className="border-[0.1px] mt-6"></span> */}
    </div>
  )
}

export default Navbar
