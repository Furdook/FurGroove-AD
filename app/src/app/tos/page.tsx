import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { tos } from "@/constants";

const tosItems = [
  "Always treat each other with respect.",
  "Always follow the directions by the Party Crew.",
  "You are liable for any damage you might cause.",
  "We do not accept any kind of harassment, period.",
  "While we are inside a location we are still visible for the other public. Please behave like that and give the best impression.",
];

export default function TOS() {
  return (
    <section id="tos" className="w-full px-6 py-24 lg:px-0">
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-md bg-primary-800 p-6"
      >
        <Link
          href="/tos"
          className="text-2xl underline decoration-accent-500 underline-offset-4 hover:decoration-4"
        >
          Terms of Service
        </Link>
        <p className="pt-4 leading-8">
          We want to build the best party ever for you. To make sure that
          everything runs smoothly and fun we have a few rules for everyone.
          Please make yourself familiar with them. Most are common sense but we
          still want to be sure you know what to expect. The rules will be
          enforced by the Party Crew. Please listen to them at all times and
          follow their requests. If you have any problem with one of the crew
          members, please let one of the party staff members know.
        </p>
        <ul className="py-4 pl-6 text-accent-500">
          {tosItems.map((item, index) => {
            return (
              <li key={index} className="list-disc pt-6 lg:pt-4">
                <p className=" text-accent-300 ">{item}</p>
              </li>
            );
          })}
        </ul>
        {
          /**
           * Renders an accordion with the title and content of the terms of service
           */
          tos.map((item, index) => {
            return (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger className="decoration-accent-500 underline-offset-4">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="leading-8">
                  {
                    /**
                     * If the content is a string, it will be rendered as a paragraph.
                     * If it is an array, it will be rendered as a list of bullet points
                     */
                    typeof item.content === "string" ? (
                      item.content
                    ) : (
                      <ul className="pl-6 text-accent-500">
                        {item.content.map((bulletPoint, index) => {
                          return (
                            <li key={index} className="list-disc pt-2">
                              <p className="text-accent-300">{bulletPoint}</p>
                            </li>
                          );
                        })}
                      </ul>
                    )
                  }
                </AccordionContent>
              </AccordionItem>
            );
          })
        }
      </Accordion>
    </section>
  );
}
