import TournamentHero from "@/components/TournamentHero";
import HostNations from "@/components/HostNations";
import HostCities from "@/components/HostCities";
import Confederations from "@/components/Confederations";
import Stages from "@/components/Stages";
import PastChampions from "@/components/PastChampions";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <TournamentHero />
      <HostNations />
      <HostCities />
      <Stages />
      <Confederations />
      <PastChampions />
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-600">
        Daten: offizielle FIFA-Angaben zur WM 2026
      </footer>
    </main>
  );
}
