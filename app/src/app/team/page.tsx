import PageTitle from "@/components/page_title";
import Container from "@/components/user_card";
import { team } from "@/constants";

export default function Team() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col lg:w-screen">
      <PageTitle title="Team" />
      <section id="team" className="flex-col lg:mt-[-2rem]">
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
