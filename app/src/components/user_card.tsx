import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { socials } from "@/constants";

/**
 * Renders a card with an image, a name, a quote, a position / genre, and social media accounts.
 *
 * @param props a user object with a name, quote, position, image url, and socials
 * @returns a Card component dislaying the user's information in the website style
 */
export default function Container(props: {
  name: string;
  quote: string;
  position: string;
  image: string;
  socials: Object | null;
}) {
  return (
    <Card className="my-16 flex w-screen max-w-4xl flex-row px-8 lg:px-0">
      <img
        src={props.image}
        alt={`${props.name}'s picture`}
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

        <div className="ml-[-104px] flex flex-col sm:ml-0 sm:mt-auto sm:h-full">
          <p className="relative my-8 sm:my-auto">
            <span className="top-[-16px] ml-[-24px]">“</span>
            {props.quote}
            <span className="bottom-[-44px] ml-1">”</span>
          </p>
          <CardFooter className="flex flex-row flex-wrap gap-6">
            {
              /**
               * If a user's socials is not null, render up to two social media account links on the card
               */
              props.socials &&
                Object.entries(props.socials).map(([key, value], index) => {
                  return (
                    <Link
                      key={index}
                      href={socials[key] + value}
                      target="_blank"
                      className="flex flex-row gap-2 text-accent-300/60 decoration-2 underline-offset-2 hover:text-accent-300 hover:underline hover:decoration-accent-500 focus-visible:text-accent-500 focus-visible:underline focus-visible:decoration-accent-500 focus-visible:outline-none "
                    >
                      <img
                        src={socials[key].logo}
                        alt={`${key} logo`}
                        className="max-h-6 rounded-sm"
                      />
                      {value}
                    </Link>
                  );
                })
            }
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
