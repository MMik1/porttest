"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

// Define the nav links for the navbar
const navLinks = [
  {
    title: "Informatie",
    path: "#about",
  },
  {
    title: "Projecten",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Function to change the language
  const changeLanguage = (language) => {
    localStorage.setItem("Language", language);
    console.log(`Language changed to: ${language}`);
  };

  return (
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          {/* Logo Link */}
          <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
            Mans
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
                <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
            ) : (
                <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
              ))}
            </ul>
          </div>

          {/* Language Selector */}
          <select
              id="taal"
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-[#33353F] text-white px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="nl">Dutch</option>
          </select>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
  );
};

export default Navbar;
