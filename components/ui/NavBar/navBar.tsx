"use client";

import { BurgerMenu, HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, ChevronDownIcon, ChevronRightIcon, XCircleIcon } from "@/components/ui/icons";
import { useState } from "react";

export default function NavBar() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:hidden">
        <ul className="flex items-center justify-center px-4 bg-background drop-shadow-2xl rounded-full">
          <li className="flex items-center justify-center flex-auto h-14">
            <button onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)} aria-label="Main menu">
              {isBurgerMenuOpen ? <XCircleIcon className="w-6 h-6" /> : <BurgerMenu className="w-6 h-6" />}
            </button>
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <HeartIcon className="w-6 h-6" aria-label="Wish List" />
          </li>
          <li className="flex items-center justify-center flex-auto h-14 bg-[var(--accent)] text-background">
            <MagnifyingGlassIcon className="w-8 h-8" aria-label="Search" />
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <ShoppingCartIcon className="w-6 h-6" aria-label="Shopping cart" />
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <button onClick={() => setAccountMenuOpen(!isAccountMenuOpen)} aria-label="Account">
              {isAccountMenuOpen ? <XCircleIcon className="w-6 h-6" /> : <UserIcon className="w-6 h-6" />}
            </button>
          </li>
        </ul>
        {isBurgerMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-white z-20 p-4 translate-y-[-100%] h-fit">
            <div className="flex justify-between items-center">
              <h2>Menu</h2>
              <button onClick={() => setBurgerMenuOpen(false)} aria-label="Close">
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
            <ul>
              <li>
                <button className="flex justify-between w-full">
                  <span>My Nintendo Store</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="flex justify-between w-full">
                  <span>Games</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="flex justify-between w-full">
                  <span>Nintendo Switch</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </li>
              <li>
                <a href="/us/whatsnew/" className="flex justify-between w-full">
                  <span>News & Events</span>
                </a>
              </li>
              <li>
                <button className="flex justify-between w-full">
                  <span>Play Nintendo</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </div>
        )}
        {isAccountMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-20 p-4">
            <div className="flex justify-between items-center">
              <h2>Log in / Sign up</h2>
              <button onClick={() => setAccountMenuOpen(false)} aria-label="Close">
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
            <div>
              <button className="w-full bg-red-500 text-white py-2">Log in</button>
              <button className="w-full bg-white text-red-500 border border-red-500 py-2 mt-2">Sign up</button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <header className="flex items-center justify-between">
          <a href="/us/" className="flex items-center">
            <span className="text-lg font-bold">Nintendo</span>
            {/* <NintendoRacetrackLogoIcon className="w-16 h-16" /> */}
          </a>
          <div className="flex items-center space-x-4">
            <form className="flex items-center" method="get" autoComplete="off">
              <button aria-haspopup="dialog" className="flex items-center space-x-2">
                <MagnifyingGlassIcon className="w-4 h-4" />
                <span>Search</span>
              </button>
              <input type="text" placeholder="Search games, hardware, news, etc" className="ml-2 p-1 border rounded" />
            </form>
            <a href="https://en-americas-support.nintendo.com/" target="_blank" className="flex items-center space-x-2">
              {/* <SupportIcon className="w-4 h-4" /> */}
              <span>Support</span>
            </a>
            <a href="/us/wish-list/" className="flex items-center space-x-2">
              <HeartIcon className="w-4 h-4" />
              <span>Wish List</span>
            </a>
            <a href="/us/cart/" className="flex items-center space-x-2">
              <ShoppingCartIcon className="w-4 h-4" />
              <span>Cart</span>
            </a>
            <button className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4" />
              <span>Log in / Sign up</span>
            </button>
          </div>
        </header>
      </div>
    </nav>
  )
}