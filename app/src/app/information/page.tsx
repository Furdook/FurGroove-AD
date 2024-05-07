import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Information() {
  return (
    <div
      id="info"
      className="section h-screen flex-col px-6 lg:w-screen lg:flex-row lg:px-0"
    >
      <img
        src="/djboy.webp"
        alt="Beatbird performing at FurGroove 1!"
        className="aspect-square w-full rounded-sm shadow-lg lg:max-w-96"
      />
      <article>
        <p className="my-auto leading-8">
          The party starts at <strong className="text-accent-400">20:00</strong>{" "}
          and will keep you busy for{" "}
          <strong className="text-accent-400">6 full hours</strong>. We got our
          own DJ's, known from{" "}
          <strong className="text-accent-400">Summerbo.at</strong> and several
          cons all over Europe. They will play all kinds of styles so always
          something for you! Feeling like chilling a bit after dancing? Go cool
          down outside with a drink and snack! All attendees get a badge with
          lanyard for attending the dance. We will also sell special t-shirts
          you can pre-order soon!
        </p>
        <Card className="mt-6 flex w-full flex-row rounded-md bg-primary-800 px-4 py-2 ">
          <CardContent className="flex flex-col">
            <CardTitle className="m text-accent-400">November</CardTitle>
            <CardTitle className="text-4xl">
              2<strong className="text-2xl font-normal opacity-50">TH</strong>
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
              3<strong className="text-2xl font-normal opacity-50">TH</strong>
            </CardTitle>
            <hr className="my-2 w-full border-accent-400" />
            <CardDescription>02:00</CardDescription>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
