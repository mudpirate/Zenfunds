"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import Logo from "@/public/newlogo-removebg-preview.png";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="  flex justify-center bg-green-50 w-full pt-3  dark:bg-black ">
      <nav className="top-0 max-w-6xl w-[90vw] ml-6  z-50 border-2  border-gray-200 rounded-3xl bg-white  dark:bg-black backdrop-blur-xl   dark:border-white shadow-lg shadow-gray-900/5 dark:shadow-black/30">
        <div className="max-w-6xl  mx-auto px-8  sm:px-10 lg:px-12">
          <div className="flex items-center justify-between h-14  sm:h-17">
            {/* Logo Section */}
            <div className="flex justify-center items-center">
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105"
                onClick={closeMobileMenu}
              >
                <Image
                  src={Logo}
                  className="border"
                  alt="..."
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center gap-2 w-full">
              <Link
                href="/"
                className="relative rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-emerald-400 px-3 lg:px-4 py-1  text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group"
              >
                <span className="relative z-10 text-xl font-bold">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>

              <Link
                href="/about"
                className="relative text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-emerald-400 px-3 lg:px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group"
              >
                <span className="relative z-10 text-xl font-bold">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>

              <Link
                href="/contact"
                className="relative text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-emerald-400 px-3 lg:px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group"
              >
                <span className="relative z-10 text-xl font-bold">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
              <Link
                href="/contact"
                className="relative text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-emerald-400 px-3 lg:px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center  gap-4 ">
              {/* Theme Toggle */}
              <div className="p-0.5 sm:p-1">
                <ThemeToggle />
              </div>

              {/* Authentication - Desktop */}
              <div className="hidden sm:block">
                <SignedOut>
                  <SignInButton>
                    <button className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                      <div className="relative z-10 w-12 flex items-center gap-1 sm:gap-2">
                        <span>Sign In</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="  rounded-lg  dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm  dark:border-emerald-700/30">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            "w-6 h-6 sm:w-full sm:h-full hover:scale-110 transition-transform duration-200",
                          userButtonBox: "flex items-center justify-center",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-200 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 pb-3 sm:pb-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl  dark:border-gray-600/50 mt-2 ">
              {/* Mobile Navigation Links */}
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
                onClick={closeMobileMenu}
              >
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
                onClick={closeMobileMenu}
              >
                <span>About</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
                onClick={closeMobileMenu}
              >
                <span>Contact</span>
              </Link>

              {/* Mobile Authentication */}
              <div className="pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
                <SignedOut>
                  <SignInButton>
                    <button
                      className="w-full  hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                      onClick={closeMobileMenu}
                    >
                      <span className="font-bold text-black">Sign In</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center justify-center p-3 rounded-xl  dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm  dark:border-emerald-700/30">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            "w-8 h-8 hover:scale-110 transition-transform duration-200",
                          userButtonBox: "flex items-center justify-center",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
