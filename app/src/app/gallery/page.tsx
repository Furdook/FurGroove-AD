import PageTitle from "@/components/page_title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { gallery } from "@/constants";
import Link from "next/link";

export default function Gallery() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col lg:w-screen">
      <PageTitle title="Gallery" />
      <section className="flex-wrap px-6 pt-6 lg:px-0">
        {
          /**
           * Renders a grid of cards with an image, a title, a created by credit and the artist's social media account
           * */
          gallery.map((item, index) => {
            return (
              <Dialog key={index}>
                <DialogTrigger className="relative min-w-56 flex-shrink-0 flex-grow basis-1/4 gap-6">
                  <Card className="group text-left hover:cursor-zoom-in">
                    <img
                      src={item.image}
                      alt={`Picture of the ${item.title}`}
                      className="aspect-square w-full rounded-md object-cover saturate-0 transition-all duration-500 group-hover:saturate-100"
                    />
                    <CardContent className="flex">
                      <CardContent>
                        <CardTitle className="pl-2 pt-2 text-xl">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-md pl-2 opacity-50">
                          Created by {item.createdBy}
                        </CardDescription>
                      </CardContent>
                      <Link href={""} className="my-auto ml-auto mr-2">
                        <img
                          src="/x.jpg"
                          alt="Twitter Icon"
                          className="my-auto h-6 w-6 rounded-sm"
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex gap-2">
                    <DialogTitle className="mb-[0.1rem]">
                      {item.title}
                    </DialogTitle>
                    <img
                      src={item.image}
                      alt={`Picture of the ${item.title}`}
                      className="w-full rounded-md"
                    />
                  </DialogHeader>
                  <DialogFooter>
                    <Link href="" className="flex gap-2">
                      <img
                        src="/x.jpg"
                        alt="Twitter Icon"
                        className="my-auto h-6 w-6 rounded-sm"
                      />
                      <h3 className="my-auto text-lg text-accent-300/80 decoration-accent-500 decoration-2 underline-offset-4 hover:text-accent-300 hover:underline">
                        @{item.createdBy}
                      </h3>
                    </Link>
                    <DialogClose asChild className="ml-auto">
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          })
        }
      </section>
    </main>
  );
}
