import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Container(props: {
  name: string;
  quote: string;
  position: string;
  image: string;
  socials: Object | null;
}) {
  const socials: { [key: string]: { link: string; logo: string } } = {
    twitter: {
      link: "https://twitter.com/",
      logo: "",
    },
    bluesky: {
      link: "https://bsky.app/profile/",
      logo: "",
    },
    mastodon: {
      link: "test/",
      logo: "",
    },
  };

  return (
    <Card className="my-16 flex w-screen max-w-4xl flex-row px-16 sm:px-6">
      <Image
        src={props.image}
        alt={`${props.name}'s picture`}
        width={200}
        height={200}
        className="mr-6 h-20 w-20 rounded-sm border-2 border-accent-500 sm:mr-10 sm:h-52 sm:w-52"
      />
      <CardContent className="my-2 flex w-full flex-col sm:my-4">
        <CardHeader className="flex sm:flex-row">
          <CardTitle className="underline decoration-accent-500 decoration-2 underline-offset-8">
            {props.name}
          </CardTitle>
          <CardDescription className="mt-1 text-xl text-accent-400 sm:ml-auto sm:mt-0 sm:text-2xl">
            {props.position}
          </CardDescription>
        </CardHeader>

        <section className="ml-[-104px] flex flex-col sm:ml-0 sm:mt-auto sm:h-full">
          <p className="relative my-8 sm:my-auto">
            <span className="top-[-16px] ml-[-24px]">“</span>
            {props.quote}
            <span className="bottom-[-44px] ml-1">”</span>
          </p>
          <CardFooter className=" flex flex-row gap-6">
            {props.socials &&
              Object.entries(props.socials).map(([key, value], index) => {
                return (
                  <Link
                    key={index}
                    href={socials[key] + value}
                    target="_blank"
                    className="flex flex-row gap-2"
                  >
                    <Image src="" width={25} height={25} alt={`${key} logo`} />
                    {value}
                  </Link>
                );
              })}
          </CardFooter>
        </section>
      </CardContent>
    </Card>
  );
}
