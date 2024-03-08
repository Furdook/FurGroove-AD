"use client";

import Link from "next/link";

import { useLayoutEffect, useState } from "react";

const menuItems = [
  {
    title: "Information",
    link: "#info",
  },
  {
    title: "Location",
    link: "#location",
  },
  {
    title: "Tickets",
    link: "#tickets",
  },
  {
    title: "Artists",
    link: "#artists",
  },
  {
    title: "Terms of Service",
    link: "/tos",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];
const handleMenuOpen = () => {
  const menu = document.getElementById("menu")!;
  const stripes = document.querySelectorAll(".stripe");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");

    stripes.forEach((stripe) => {
      stripe.classList.add("bg-accent-500");
    });
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");

    stripes.forEach((stripe) => {
      stripe.classList.remove("bg-accent-500");
    });
  }
};

const handleSelected = (index: number, link: string) => {
  const menuItem = document.querySelectorAll("li");
  menuItem.forEach((item) => {
    item.removeAttribute("aria-selected");
  });
  menuItem[index].setAttribute("aria-selected", "true");
};

export default function Navigation() {
  const [isReady, setIsReady] = useState(false);

  if (typeof window !== "undefined") {
    window.onresize = () => {
      setIsReady(window.innerWidth < 1024);
    };

    window.onscroll = () => {
      const menu = document.getElementById("nav")!;

      if (window.scrollY > 1200 && window.scrollY < 3000) {
        menu.style.backgroundColor = "rgba(19, 19, 22, 0.8)";
      } else {
        menu.style.backgroundColor = "#131316";
      }
    };
  }

  useLayoutEffect(() => {
    setIsReady(window.innerWidth < 1024);
  }, []);

  return (
    <nav id="nav" className="fixed z-10 w-screen">
      {isReady ? (
        <label
          htmlFor="burger__input"
          className="group fixed right-6 top-4 hover:cursor-pointer"
          tabIndex={0}
          onKeyDown={(e) => {
            e.key === "Enter" && handleMenuOpen();
          }}
        >
          <input
            id="burger__input"
            type="checkbox"
            className="hidden"
            onClick={handleMenuOpen}
          />
          <div id="burger" className="flex flex-col gap-2">
            <div className="stripe h-1 w-12 rounded-sm bg-accent-400 group-hover:bg-accent-500"></div>
            <div className="stripe duration-400 ml-auto h-1 w-10 rounded-sm bg-accent-400 transition-all group-hover:w-12 group-hover:bg-accent-500"></div>
            <div className="stripe ml-auto h-1 w-8 rounded-sm bg-accent-400 transition-all duration-300 group-hover:w-12 group-hover:bg-accent-500"></div>
          </div>
        </label>
      ) : null}

      <ul
        id="menu"
        className="my-auto mr-6 hidden h-screen flex-col justify-center gap-8  text-right tracking-widest lg:mx-auto lg:mt-0 lg:flex lg:h-12 lg:w-screen lg:max-w-4xl lg:flex-row lg:justify-around lg:pt-4"
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="text-2x lg:text-xl">
              <Link
                href={item.link}
                className="text-accent-400 decoration-2 underline-offset-4 opacity-75 hover:text-accent-300 hover:underline hover:decoration-accent-500 hover:opacity-100 focus-visible:text-accent-300 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:transition-none"
                onClick={() => {
                  handleMenuOpen;
                  handleSelected(index, item.link);
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
