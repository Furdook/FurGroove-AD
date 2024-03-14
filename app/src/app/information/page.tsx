import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Information() {
  return (
    <section
      id="info"
      className="flex-col px-6 lg:w-screen lg:flex-row lg:px-0"
    >
      <img
        src="/djboy.webp"
        alt="Beatbird performing at FurGroove 1!"
        className="aspect-square w-full rounded-sm shadow-lg lg:max-w-96"
      />
      <article>
        <p className="my-auto leading-8">
          {`Come join us to a place where you can be yourself! FurGroove AD
          edition welcomes not only furries but also puppies, gearheads and
          everyone with an open mind. Together with{" "}
          <strong className="underline decoration-accent-500 decoration-2">
            Fort33
          </strong>{" "}
          we want to celebrate life and have an awesome tailwagging night with
          purrfect DJ's and atmosphere!`}
        </p>
        <Card className="mt-6 flex w-full flex-row rounded-md bg-primary-800 px-4 py-2 ">
          <CardContent className="flex flex-col">
            <CardTitle className="m text-accent-400">November</CardTitle>
            <CardTitle className="text-4xl">
              12<strong className="text-2xl font-normal opacity-50">TH</strong>
            </CardTitle>
            <hr className="my-2 w-full border-accent-400" />
            <CardDescription>20:00</CardDescription>
          </CardContent>
          <MoveRight
            className="mx-auto my-auto flex-grow text-accent-400"
            size={64}
            strokeWidth={1}
          ></MoveRight>
          <CardContent className="ml-auto flex flex-col text-right">
            <CardTitle className="text-accent-400">November</CardTitle>
            <CardTitle className="text-4xl ">
              13<strong className="text-2xl font-normal opacity-50">TH</strong>
            </CardTitle>
            <hr className="my-2 w-full border-accent-400" />
            <CardDescription>02:00</CardDescription>
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
