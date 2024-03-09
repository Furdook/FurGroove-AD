import Container from "@/components/user_card";

export default function Team() {
  const test = [
    {
      name: "Hunter",
      quote: "Dutch Boy liking big things",
      position: "Head Organiser",
      image: "/hunter.jpg",
      socials: {
        twitter: "HunterHuskyNL",
        bluesky: "hunterhuskynl.bsky.social",
      },
    },
    {
      name: "Mai Tai",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      position: "Web Developer",
      image: "/mai.jpeg",
      socials: { twitter: "MoreMaiTai", bluesky: "maitai.social" },
    },
  ];
  return (
    <section id="team" className="z-40 h-screen flex-col">
      {test.map((artist, index) => (
        <Container key={index} {...artist} />
      ))}
    </section>
  );
}
