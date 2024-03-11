import PageTitle from "@/components/page_title";
import Container from "@/components/user_card";
import { team } from "@/constants";

export default function Team() {
  return (
    <main className="mx-auto flex max-w-4xl pt-6 lg:w-screen">
      <PageTitle title="Team" />
      <section id="team" className="flex-col pt-10">
        {
          /**
           * Renders a list of cards with an image, their name, a quote, their role, and their social media accounts.
           */
          team.map((member, index) => (
            <Container key={index} {...member} />
          ))
        }
      </section>
    </main>
  );
}
