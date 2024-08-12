"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import useDarkMode from "@/hooks/useDarkMode";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const darkMode = useDarkMode();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <nav
      className={`${
        darkMode ? (scrolled ? "bg-white bg-opacity-80 backdrop-blur-md" : "bg-black text-white") : "bg-white shadow-md"
      } w-full fixed h-[70px] shadow-md font-semibold z-10 flex justify-center items-center space-x-10 duration-200`}
    >
      <div
        className={`py-1 ${
          isActive("/")
            ? "border-b-2 border-b-violet-500 text-violet-500"
            : scrolled
            ? "border-b-2 border-b-transparent hover:border-b-black duration-200"
            : "border-b-2 border-b-transparent hover:border-b-white duration-200"
        }`}
      >
        <Link href={"/"}>Home</Link>
      </div>
      <div
        className={`py-1 ${
          isActive("/projects")
            ? "border-b-2 border-b-violet-500 text-violet-500"
            : scrolled
            ? "border-b-2 border-b-transparent hover:border-b-black duration-200"
            : "border-b-2 border-b-transparent hover:border-b-white duration-200"
        }`}
      >
        <Link href={"/projects"}>Projects</Link>
      </div>
      <ToggleTheme />
    </nav>
  );
};
