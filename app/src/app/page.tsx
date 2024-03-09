import Artists from "./artists/page";
import Transition from "../components/transition";

import Image from "next/image";
import Information from "./information/page";
import Location from "./location/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-screen flex-col">
        <Image src="/logo.webp" alt="" width={800} height={800} />
        <h2 className="text-accent-400">FORT33 - Leusden</h2>
      </section>
      <Transition />
      <Information />
      <Location />
      <Artists />
    </main>
  );
}
