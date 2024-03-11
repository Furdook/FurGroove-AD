import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tickets } from "@/constants";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="flex h-screen w-full flex-col px-6 lg:px-0"
    >
      <section className="flex flex-row">
        {tickets.map((ticket, index) => {
          return (
            <Card
              key={index}
              id="ticket"
              className={`${ticket.type === "Early Bird" ? "bg-primary-600" : ticket.type === "Standard" ? "bg-primary-700" : "bg-primary-800"} flex aspect-[1/2] w-4/12 flex-col text-center align-middle`}
            >
              <CardTitle className="text-md pt-4 sm:pt-12 sm:text-2xl lg:text-3xl">
                {ticket.type}
              </CardTitle>
              <CardContent className="text-sm text-accent-300/50 sm:text-xl ">
                Ticket
              </CardContent>
              <CardContent className="mt-[-2rem] pt-8 text-xl text-accent-400 sm:pt-[25%] sm:text-4xl md:mt-0">
                {ticket.price}
              </CardContent>
              <div
                id="ticket-seperator"
                className="absolute bottom-1/3 w-full border-2 border-primary-900 "
              ></div>
              <img
                src="/logo_smol.webp"
                alt=""
                className={`mx-auto mt-auto pb-4 md:pb-8 ${ticket.size} `}
              />
            </Card>
          );
        })}
      </section>

      <Button variant="outline" size="xl">
        Purchase Ticket
      </Button>
    </section>
  );
}
