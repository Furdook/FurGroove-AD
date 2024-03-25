import Artists from "./artists/page";
import Transition from "../components/transition";
import Information from "./information/page";
import Location from "./location/page";
import TOS from "./tos/page";
import Tickets from "./tickets/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <header className="h-screen flex-col">
        <img src="/logo.webp" alt="" />
        <h1 className="text-accent-400">FORT33 - Leusden</h1>
      </header>
      <Transition />
      <Information />
      <Location />
      <Tickets />
      <Artists />
      <TOS />
    </main>
  );
}
