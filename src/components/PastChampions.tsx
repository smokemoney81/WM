import { PAST_CHAMPIONS } from "@/data/wm2026";
import FlagBar from "./FlagBar";
import SectionHeader from "./SectionHeader";

export default function PastChampions() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-800">
      <SectionHeader title="Bisherige Weltmeister" subtitle="Stand vor der WM 2026." />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PAST_CHAMPIONS.map((c) => (
          <div key={c.country} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <FlagBar colors={c.colors} className="mb-3" />
            <p className="text-sm font-semibold text-white">{c.country}</p>
            <p className="text-2xl font-black text-white mt-1">
              {c.titles}
              <span className="text-xs font-normal text-zinc-500 ml-1">
                {c.titles === 1 ? "Titel" : "Titel"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
