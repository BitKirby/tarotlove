"use client";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const links = [
  {
    label: "Features",
    subLinks: [
      { label: "Daily Tarot", href: "Feature1" },
      { label: "Tarot Spreads", href: "Feature2" },
      { label: "Card Interpretation", href: "Feature3" },
    ],
  },
  {
    label: "Pricing",
    subLinks: [
      { label: "Basic", href: "PricingOption1" },
      { label: "Advance", href: "PricingOption2" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMouseEnter = (label: string) => {
    setIsHovered(true);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveMenu("");
  };

  return (
    <header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link
            href="/"
            aria-label="Landing Page"
            title="Landing Page"
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              alt={siteConfig.name}
              src="/logo.jpg"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-gray-950 dark:text-gray-300 hidden md:block">
              Tarot of Love
            </span>
          </Link>
        </div>
        <div className="relative " onMouseLeave={handleMouseLeave}>
          <div className="flex items-center gap-12 md:flex">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
              >
                <span className="cursor-pointer tracking-wide transition-colors duration-200 font-normal ">
                  {link.label}
                </span>
                {activeMenu === link.label && (
                  <div className="absolute mt-2 py-1">
                    <ul>
                      {link.subLinks.map((subLink, index) => (
                        <li key={index}>
                          <a
                            href={subLink.href}
                            aria-label={subLink.label}
                            title={subLink.label}
                            className="block py-2 transition-colors duration-200 font-normal hover:text-blue-500 whitespace-nowrap"
                          >
                            {subLink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-x-6">
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* 手机端 */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page"
                      title="Landing Page"
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.jpg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        Tarot of Love
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-norma"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center justify-end gap-x-5">
                    <ThemedButton />
                    <LangSwitcher />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
