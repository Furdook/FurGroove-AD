import Container from "./card";

export default function Artists() {
  const test = {
    name: "Mai Tai",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
    position: "Web Developer",
    image: "/mai.jpeg",
    socials: { twitter: "MoreMaiTai", bluesky: "maitai.social" },
  };
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <Container {...test} />
    </section>
  );
}
