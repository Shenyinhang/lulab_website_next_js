"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClubClick = (clubPath: string) => {
    setShowDropdown(false);
    window.location.href = clubPath;
  };

  return (
    <nav
      className="p-4 fixed top-0 w-full z-10"
      style={{
        backgroundImage: `url('/title.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-opacity-90">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <div
            className="flex items-center"
            onClick={() => setShowDropdown(false)}
          >
            <Image src="/logo.png" alt="Lu Lab" width="50" height="50" />
            <span className="ml-8 text-xl lu-lab-text font-semibold">
              Lu Lab
            </span>
          </div>
        </div>

        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="/Home"
                className={`text-white text-xl px-5 py-2 rounded font-semibold ${
                  router.pathname === "/Home" ? "hover:text-black" : ""
                }`}
              >
                <span>Home</span>
              </Link>
            </li>

            <li>
              <div className="relative" ref={dropdownRef}>
                <a
                  href="#"
                  className={`text-white text-xl px-5 py-2 rounded font-semibold ${
                    showDropdown ? "hover:text-black" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <span>Clubs</span>
                </a>
                {showDropdown && (
                  <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-72">
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/Metaverse-Club")}
                    >
                      Metaverse Club
                    </a>
                    {/* 其他链接 */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                href="/About"
                className={`text-white text-xl px-5 py-2 rounded font-semibold ${
                  router.pathname === "/About" ? "hover:text-black" : ""
                }`}
              >
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
