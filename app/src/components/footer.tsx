import Link from "next/link";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

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
];

export default function Footer() {
  return (
    <footer className="m-2 mt-56 rounded-md bg-primary-800 p-6">
      <Card className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row">
        <Link href="../" className="transition hover:scale-110">
          <Image
            src="/logo_smol.webp"
            alt="Event logo"
            width={128}
            height={128}
            className="hidden rounded-sm md:block"
          ></Image>
        </Link>
        <CardContent className="flex flex-col">
          <ul className="my-auto">
            {footerItems.map((item, index) => {
              return (
                <li className="text-accent-300/60 ">
                  <Link
                    href={item.link}
                    className="decoration-2 underline-offset-2 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardContent className="mt-auto flex flex-row gap-6 sm:ml-auto">
          <Link
            key="twitter"
            href="https://twitter.com/"
            target="_blank"
            className="flex flex-row gap-2 text-accent-300/60  decoration-2 underline-offset-2 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none"
          >
            <Image
              src="/x.jpg"
              width={25}
              height={25}
              alt={`x logo`}
              className="rounded-sm"
            />
            FurGroove
          </Link>
          <Link
            key="twitter"
            href="https://twitter.com/"
            target="_blank"
            className="flex flex-row gap-2 text-accent-300/60 decoration-2 underline-offset-2 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none "
          >
            <Image
              src="/bsky.jpg"
              width={25}
              height={25}
              alt={`x logo`}
              className="rounded-sm"
            />
            furgroove.bsky.social
          </Link>
        </CardContent>
      </Card>
    </footer>
  );
}
