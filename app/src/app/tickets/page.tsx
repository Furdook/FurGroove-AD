import { Card, CardContent, CardTitle } from "@/components/ui/card";

const tickets = [
  {
    type: "Early Bird",
    colour: "bg-primary-600",
    price: "€ 15,-",
    size: "w-4/12",
  },
  {
    type: "Standard",
    colour: "bg-primary-700",
    price: "€ 20,-",
    size: "w-4/12",
  },
  {
    type: "Late Bird",
    colour: "bg-primary-800",
    price: "€ 25,-",
    size: "w-4/12",
  },
];

export default function Tickets() {
  return (
    <section className="flex h-screen w-full flex-row px-6 lg:px-0">
      {tickets.map((ticket, index) => {
        return (
          <Card
            key={index}
            id="ticket"
            className={`${[ticket.colour]} aspect-[1/2] w-4/12 `}
          >
            <CardTitle className="mx-auto w-fit pt-12 lg:text-3xl">
              {ticket.type}
            </CardTitle>
            <CardContent className="mx-auto w-fit text-xl text-accent-300/50">
              Ticket
            </CardContent>
            <CardContent className="mx-auto w-fit pt-[25%] text-2xl text-accent-400 sm:text-4xl">
              {ticket.price}
            </CardContent>
            <div
              id="ticket-seperator"
              className="absolute bottom-1/3 w-full border-2 border-primary-900 "
            ></div>
          </Card>
        );
      })}
    </section>
  );
}
