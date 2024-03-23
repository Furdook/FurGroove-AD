import Container from "@/components/user_card";
import { artists } from "@/constants";

export default function Artists() {
  return (
    <section id="artists" className="flex-col">
      {
        /**
         * Renders a list of cards with an image, their name, a quote, their genre, and their social media accounts.
         */
        artists.map((artist, index) => (
          <Container key={index} {...artist} />
        ))
      }
    </section>
  );
}
