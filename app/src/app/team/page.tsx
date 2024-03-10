import Container from "@/components/user_card";
import { team } from "@/constants";

export default function Team() {
  return (
    <section id="team" className="z-40 flex-col pt-10">
      {
        /**
         * Renders a list of cards with an image, their name, a quote, their role, and their social media accounts.
         */
        team.map((member, index) => (
          <Container key={index} {...member} />
        ))
      }
    </section>
  );
}
