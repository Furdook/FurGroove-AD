import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { gallery } from "@/constants";

export default function Gallery() {
  return (
    <main className="mx-auto flex h-screen max-w-4xl px-6 pt-6 lg:w-screen lg:px-0">
      <h1 className="fixed top-[-1.5rem] z-10 w-full bg-primary-900 pb-2 pt-10 text-2xl lg:top-10 lg:pt-4">
        Gallery
      </h1>
      <section className="mt-24 flex-wrap">
        {
          /**
           * Renders a grid of cards with an image, a title, a created by credit and the artist's social media account
           * */
          gallery.map((item, index) => {
            return (
              <Card
                key={index}
                className="relative min-w-56 flex-shrink-0 flex-grow basis-1/4"
              >
                <img
                  src={item.image}
                  alt=""
                  className="aspect-square w-full rounded-sm"
                />
                <CardTitle className="pl-2 pt-2 text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-md pl-2 opacity-50">
                  Created by {item.createdBy}
                </CardDescription>
              </Card>
            );
          })
        }
      </section>
    </main>
  );
}
