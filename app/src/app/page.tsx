import Team from "./team/page";
import Artists from "./artists/page";
import Information from "./information/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl">[EVENT NAME]</h1>
        <h2 className="text-accent-400">FORT33 - Leusden</h2>
      </section>
      <Information />
      <Artists />
      <Team />
    </main>
  );
}
