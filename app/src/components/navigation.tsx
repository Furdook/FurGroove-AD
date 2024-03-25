"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/constants";

/**
 * Handle the opening and closing of the menu, and the changing of the hamburger icon.
 * Closes menu on resize to prevent issues reagrding the stye changes.
 *
 * @param state - A boolean value to determine if the menu should be open or closed
 */
const handleMenuOpen = (state?: boolean) => {
  const menu = document.getElementById("menu")!;
  const stripes = document.querySelectorAll(".stripe");
  const body = document.querySelector("body")!;

  if (menu.classList.contains("hidden") && state !== false) {
    menu.classList.remove("hidden", "mr-6");
    menu.classList.add("flex", "pr-6");

    stripes.forEach((stripe) => {
      stripe.classList.add("bg-accent-500");
    });
    body.style.overflow = "hidden";
  } else {
    menu.classList.remove("flex", "pr-6");
    menu.classList.add("hidden", "mr-6");

    stripes.forEach((stripe) => {
      stripe.classList.remove("bg-accent-500");
    });
    body.style.overflow = "auto";
  }
};

export default function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  if (typeof window !== "undefined") {
    window.onresize = () => {
      handleMenuOpen(false);
    };

    window.onscroll = () => {
      const nav = document.getElementById("nav")!;
      const burger = document.getElementById("burger__container")!;
      if (window.scrollY > scrollPosition && window.scrollY > 10) {
        nav.style.transform = "translateY(-100%)";
        burger.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
        burger.style.transform = "translateY(0)";
      }
      setScrollPosition(window.scrollY);
    };
  }

  return (
    <nav
      id="nav"
      className="fixed z-20 w-screen bg-primary-900 transition-transform duration-300 lg:bg-primary-900/70 lg:backdrop-blur"
    >
      <Hamburger />
      <ul
        id="menu"
        className="my-auto mr-6 hidden h-screen flex-col justify-center gap-8 text-right tracking-widest  lg:mx-auto lg:mt-0 lg:flex lg:h-12 lg:w-screen lg:max-w-4xl lg:flex-row lg:justify-around lg:pt-2"
      >
        {navigation.map((item, index) => {
          return (
            <li key={index} className="text-2xl lg:text-xl">
              <Link
                href={item.link}
                className="text-accent-400 decoration-2 underline-offset-4 opacity-75 hover:text-accent-300 hover:underline hover:decoration-accent-500 hover:opacity-100 focus-visible:text-accent-300 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:transition-none"
                onClick={() => {
                  handleMenuOpen(false);

                  const menuItem = document.querySelectorAll("li");
                  menuItem.forEach((item) => {
                    item.removeAttribute("aria-selected");
                  });
                  menuItem[index].setAttribute("aria-selected", "true");
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const Hamburger = () => {
  return (
    <div
      id="burger__container"
      className="fixed h-16 w-screen bg-primary-900/70 backdrop-blur transition-transform duration-300 lg:hidden"
    >
      <img src="/logo.webp" alt="FurGroove logo" className="mx-auto h-14" />
      <label
        htmlFor="burger__input"
        className="group fixed right-6 top-4 hover:cursor-pointer lg:hidden"
        tabIndex={0}
        onKeyDown={(e) => {
          e.key === "Enter" && handleMenuOpen();
        }}
      >
        <input
          id="burger__input"
          type="checkbox"
          className="hidden"
          onClick={() => handleMenuOpen()}
        />
        <div id="burger" className="flex flex-col gap-2">
          <div className="stripe  h-1 w-12 rounded-sm bg-accent-400 group-hover:bg-accent-500"></div>
          <div className="stripe duration-400 ml-auto h-1 w-10 rounded-sm bg-accent-400 transition-all group-hover:w-12 group-hover:bg-accent-500"></div>
          <div className="stripe ml-auto h-1 w-8 rounded-sm bg-accent-400 transition-all duration-300 group-hover:w-12 group-hover:bg-accent-500"></div>
        </div>
      </label>
    </div>
  );
};
