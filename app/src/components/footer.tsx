import Link from "next/link";
import { Card, CardContent, CardTitle } from "./ui/card";

const footerItems = [
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Art Gallery",
    link: "/gallery",
  },
  {
    title: "Terms of Service",
    link: "/tos",
  },
  {
    title: "Telegram Group",
    link: "",
  },
  {
    title: "Announcements Channel",
    link: "",
  },
  {
    title: "FurGroove SFW",
    link: "https://furgroove.club",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="m-2 mt-56 rounded-md bg-primary-800 p-6">
      <Card className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row">
        <div className="flex flex-col md:flex-row">
          <Link
            href="../"
            className="w-fit transition hover:translate-x-2 md:hover:scale-110"
          >
            <img
              src="/logo_smol.webp"
              alt="Event logo"
              className="ml-[-0.8rem] h-16 w-16 rounded-sm md:h-32 md:w-32"
            />
          </Link>
          <CardContent className="flex flex-col">
            <ul className="my-auto">
              {
                /**
                 * Renders a list of links to the different pages of the website
                 */
                footerItems.map((item, index) => {
                  return (
                    <li key={index} className="text-accent-300/60 ">
                      <Link
                        href={item.link}
                        className="underline-offset-4 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </CardContent>
        </div>
        <CardContent className="mt-auto flex flex-row gap-6 sm:ml-auto">
          <Link
            key="twitter"
            href="https://twitter.com/furgrooveNL"
            target="_blank"
            className="flex flex-row gap-2 text-accent-300/60 underline-offset-4 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none"
          >
            <img src="/x.jpg" alt="x logo" className="h-6 w-6 rounded-sm" />
            FurGrooveNL
          </Link>
          <Link
            key="bluesky"
            href="https://bsky.app/profile/furgroove.bsky.social"
            target="_blank"
            className="flex flex-row gap-2 text-accent-300/60 decoration-2 underline-offset-2 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none "
          >
            <img
              src="/bsky.jpg"
              alt="Bluesky logo"
              className="h-6 w-6 rounded-sm"
            />
            furgroove.bsky.social
          </Link>
        </CardContent>
      </Card>
    </footer>
  );
}
