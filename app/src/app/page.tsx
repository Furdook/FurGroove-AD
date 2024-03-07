import Artists from "@/components/artists";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Landing />
      <Artists />
    </main>
  );
}
