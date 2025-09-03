"use client";

import { useState } from "react";
import Logo from "@/components/v2/Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIssuesDropdownOpen, setIsIssuesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const issuesDropdownItems = [
    { label: "Current Issue", href: "/issues/current" },
    { label: "Past Issues", href: "/issues/archive" },
    { label: "Submit Article", href: "/issues/submit" },
    { label: "Editorial Guidelines", href: "/issues/guidelines" },
  ];

  const aboutDropdownItems = [
    { label: "Our Mission", href: "/about/mission" },
    { label: "Team", href: "/about/team" },
    { label: "History", href: "/about/history" },
    { label: "Contact", href: "/about/contact" },
  ];

  return (
    <nav className="bg-gray-800 absolute top-0 z-50 flex w-full h-16 items-center">
      <div className="text-white ml-4">
        <h1 className="text-lg font-bold">
          <Logo /> SD Research Club
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="text-white ml-6 font-bold justify-center hidden md:flex h-full">
        <ul className="flex gap-0 items-center justify-center h-full">
          {/* About Us Dropdown */}
          <li
            className="relative h-full"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <div className="transition-colors px-6 py-2 h-full flex items-center cursor-pointer hover:bg-gray-900 hover:bg-opacity-80">
              <p>About Us</p>
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 bg-gray-800 min-w-48 shadow-lg">
                {aboutDropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-white hover:bg-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Issues Dropdown */}
          <li
            className="relative h-full"
            onMouseEnter={() => setIsIssuesDropdownOpen(true)}
            onMouseLeave={() => setIsIssuesDropdownOpen(false)}
          >
            <div className="transition-colors px-6 py-2 h-full flex items-center cursor-pointer hover:bg-gray-900 hover:bg-opacity-80">
              <p>Issues</p>
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isIssuesDropdownOpen && (
              <div className="absolute top-full left-0 bg-gray-800 min-w-48 shadow-lg">
                {issuesDropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-white hover:bg-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li className="h-full">
            <a
              href="/events"
              className="transition-colors px-6 py-2 h-full flex items-center cursor-pointer hover:bg-gray-900 hover:bg-opacity-80"
            >
              <p>Events</p>
            </a>
          </li>
          <li className="h-full">
            <a
              href="/workshops"
              className="transition-colors px-6 py-2 h-full flex items-center cursor-pointer hover:bg-gray-900 hover:bg-opacity-80"
            >
              <p>Workshops</p>
            </a>
          </li>
          <li className="h-full">
            <a
              href="/faculty"
              className="transition-colors px-6 py-2 h-full flex items-center cursor-pointer hover:bg-gray-900 hover:bg-opacity-80"
            >
              <p>Faculty</p>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto mr-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 hover:bg-gray-900 rounded transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 md:hidden shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {/* About Us Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="w-full text-left px-4 py-3 text-white hover:bg-gray-900 transition-colors flex items-center justify-between"
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="bg-gray-800">
                  {aboutDropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-8 py-2 text-white hover:bg-gray-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Issues Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsIssuesDropdownOpen(!isIssuesDropdownOpen)}
                className="w-full text-left px-4 py-3 text-white hover:bg-gray-900 transition-colors flex items-center justify-between"
              >
                Issues
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isIssuesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isIssuesDropdownOpen && (
                <div className="bg-gray-800">
                  {issuesDropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-8 py-2 text-white hover:bg-gray-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/events"
              className="block px-4 py-3 text-white hover:bg-gray-900 transition-colors"
            >
              Events
            </a>
            <a
              href="/workshops"
              className="block px-4 py-3 text-white hover:bg-gray-900 transition-colors"
            >
              Workshops
            </a>
            <a
              href="/faculty"
              className="block px-4 py-3 text-white hover:bg-gray-900 transition-colors"
            >
              Faculty
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
