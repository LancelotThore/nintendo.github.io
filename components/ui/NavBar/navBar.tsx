"use client";

import {
  BurgerMenu,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  ChevronRightIcon,
  XCircleIcon,
  Nintendo,
  NintendoStore,
  NintendoCoin,
  SupportIcon
} from "@/components/ui/icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="flex items-center justify-between bg-accent px-4 py-3 md:hidden">
        <Nintendo className="text-background w-24" />
        <div className="flex gap-5">
          <NintendoStore className="text-background w-32" />
          <Link href="/">
            <Image
              className="border border-white rounded"
              src="/flags/usa.webp"
              alt="US Flag"
              width={24}
              height={24}
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center bg-secondary-background px-4 py-3 md:hidden">
        <NintendoCoin className="w-6 mr-4 text-accent" />
        <p>
          Earn{" "}
          <Link href="/" className="font-bold underline">
            My Nintendo Points
          </Link>{" "}
          on digital games
        </p>
      </div>

      {/* Mobile Navigation */}
      {isBurgerMenuOpen && (
        <div onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)} className="w-screen h-screen bg-black/60 absolute top-0 left-0 z-10"></div>
      )}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 lg:hidden z-50 max-w-110">
        <ul className="flex items-center justify-center px-4 bg-background drop-shadow-2xl rounded-full z-50 relative">
          <li className="flex items-center justify-center flex-auto h-14">
            <button
              onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
              aria-label="Main menu"
            >
              {isBurgerMenuOpen ? (
                <XCircleIcon className="w-6 h-6" />
              ) : (
                <BurgerMenu className="w-6 h-6" />
              )}
            </button>
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <Link href="/">
              <HeartIcon className="w-6 h-6" aria-label="Wish List" />
            </Link>
          </li>
          <li className="flex items-center justify-center flex-auto h-14 text-background">
            <Link
              href="/"
              className="flex items-center justify-center bg-accent rounded-full mt-[-1rem] w-15	h-15"
            >
              <MagnifyingGlassIcon className="w-8 h-8" aria-label="Search" />
            </Link>
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <Link href="/">
              <ShoppingCartIcon
                className="w-6 h-6"
                aria-label="Shopping cart"
              />
            </Link>
          </li>
          <li className="flex items-center justify-center flex-auto h-14">
            <button
              onClick={() => setAccountMenuOpen(!isAccountMenuOpen)}
              aria-label="Account"
            >
              {isAccountMenuOpen ? (
                <XCircleIcon className="w-6 h-6" />
              ) : (
                <UserIcon className="w-6 h-6" />
              )}
            </button>
          </li>
        </ul>
        {isBurgerMenuOpen && (
          <div className="absolute top-2/4 left-0 w-full bg-gray-100 z-20 pb-12 translate-y-[-100%] h-fit rounded-t-2xl overflow-hidden flex items-center justify-center flex-col gap-px">
            <div className="flex justify-center items-center relative bg-background w-full p-4">
              <h2 className="font-bold text-2xl text-center">Menu</h2>
              <button
                onClick={() => setBurgerMenuOpen(false)}
                aria-label="Close"
                className="absolute right-4"
              >
                <XCircleIcon className="w-7 h-7" />
              </button>
            </div>
            <ul className="w-full flex items-center justify-center flex-col gap-0.5">
              <li className="flex items-center w-full px-6 py-4 bg-background">
                <HeartIcon className="w-4 h-4 text-accent mr-2" />
                <p className="w-full">My Nintendo Store</p>
                <ChevronRightIcon className="w-4 h-4" />
              </li>
              <li className="flex items-center w-full px-6 py-4 bg-background">
                <HeartIcon className="w-4 h-4 text-accent mr-2" />
                <p className="w-full">My Nintendo Store</p>
                <ChevronRightIcon className="w-4 h-4" />
              </li>
              <li className="flex items-center w-full px-6 py-4 bg-background">
                <HeartIcon className="w-4 h-4 text-accent mr-2" />
                <p className="w-full">My Nintendo Store</p>
                <ChevronRightIcon className="w-4 h-4" />
              </li>
              <li className="flex items-center w-full px-6 py-4 bg-background">
                <HeartIcon className="w-4 h-4 text-accent mr-2" />
                <p className="w-full">My Nintendo Store</p>
                <ChevronRightIcon className="w-4 h-4" />
              </li>
              <li className="flex items-center w-full px-6 py-4 bg-background">
                <HeartIcon className="w-4 h-4 text-accent mr-2" />
                <p className="w-full">My Nintendo Store</p>
                <ChevronRightIcon className="w-4 h-4" />
              </li>
            </ul>
          </div>
        )}
        {isAccountMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-20 p-4">
            <div className="flex justify-between items-center">
              <h2>Log in / Sign up</h2>
              <button
                onClick={() => setAccountMenuOpen(false)}
                aria-label="Close"
              >
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
            <div>
              <button className="w-full bg-red-500 text-white py-2">
                Log in
              </button>
              <button className="w-full bg-white text-red-500 border border-red-500 py-2 mt-2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="flex items-center justify-center bg-accent p-4">
            <Nintendo className="w-17.5 text-white" />
          </Link>
          <form className="flex items-center border-b border-foreground hover:border-accent basis-112">
            <button
              aria-haspopup="dialog"
              className="flex items-center space-x-2"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 p-1 outline-none"
            />
            <select name="categories" id="" className="ml-auto outline-none focus:text-accent font-bold place-self-end">
              <option value="all">All catégories</option>
              <option value="games">Games</option>
              <option value="hardware">Hardware</option>
              <option value="merchandise">Merchandise</option>
              <option value="News & Events">News & Events</option>
              <option value="Support">Support</option>
            </select>
          </form>
        </div>
        <div className="flex items-center gap-7 px-5">
          <Link href="/" target="_blank"
            className="flex items-center space-x-2 hover:text-accent"
          >
            <SupportIcon className="w-4 h-4" />
            <span>Support</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 hover:text-accent">
            <HeartIcon className="w-4 h-4" />
            <span>Wish List</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 hover:text-accent">
            <ShoppingCartIcon className="w-4 h-4" />
            <span>Cart</span>
          </Link>
          <button className="flex items-center space-x-2 hover:text-accent">
            <UserIcon className="w-4 h-4" />
            <span>Log in / Sign up</span>
          </button>
          <Link href="/">
            <Image
              className="border border-white rounded"
              src="/flags/usa.webp"
              alt="US Flag"
              width={24}
              height={24}
            ></Image>
          </Link>
        </div>
      </div>
    </nav>
  );
}
