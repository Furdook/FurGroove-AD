import Artists from "./artists/page";
import Transition from "../components/transition";

import Image from "next/image";
import Information from "./information/page";
import Location from "./location/page";
import TOS from "./tos/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-screen flex-col">
        <img src="/logo.webp" alt="" />
        <h2 className="text-accent-400">FORT33 - Leusden</h2>
      </section>
      <Transition />
      <Information />
      <Location />
      <Artists />
      <TOS />
    </main>
  );
}
