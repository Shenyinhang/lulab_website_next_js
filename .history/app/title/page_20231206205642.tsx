"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // 导入菜单图标

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleWindowSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleWindowSize);
    handleWindowSize(); // 初始化设置

    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

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

        {isSmallScreen ? (
          // For small screens, show menu button
          <div className="flex-grow text-center">
            <div className="relative">
              {showMenu ? (
                <FaTimes
                  onClick={() => setShowMenu(false)}
                  className="absolute top-0 left-0 mt-4 ml-4 text-white text-xl rounded-full cursor-pointer z-20"
                />
              ) : (
                <FaBars
                  onClick={() => setShowMenu(true)}
                  className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black z-20"
                />
              )}
              {showMenu && (
                <div className="fixed top-0 left-0 h-full w-full bg-gray-800 text-white py-4">
                  <div className="max-w-7xl mx-auto">
                    <ul className="flex flex-col items-center space-y-4">
                      <li>
                        <Link
                          href="/"
                          className="text-xl font-semibold hover:text-gray-300"
                          onClick={() => setShowMenu(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Clubs"
                          className="text-xl font-semibold hover:text-gray-300"
                          onClick={() => setShowMenu(false)}
                        >
                          Clubs
                        </Link>
                      </li>
                      {/* Add other menu items */}
                      <li>
                        <Link
                          href="/About"
                          className="text-xl font-semibold hover:text-gray-300"
                          onClick={() => setShowMenu(false)}
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // For larger screens, show individual buttons
          <div className="hidden md:flex md:justify-center md:flex-grow">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <div className="relative" ref={dropdownRef}>
                  <a
                    href="#"
                    className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
                    onClick={toggleDropdown}
                  >
                    <span>Clubs</span>
                  </a>
                  {showDropdown && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 py-2 rounded w-72 text-center">
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => handleClubClick("/MetaverseClub")}
                      >
                        Metaverse Club
                      </a>
                      {/* Add other club links */}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
                >
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
