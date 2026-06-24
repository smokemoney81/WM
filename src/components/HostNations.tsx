import { HOST_NATIONS } from "@/data/wm2026";
import FlagBar from "./FlagBar";
import SectionHeader from "./SectionHeader";

export default function HostNations() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeader title="Gastgeber-Nationen" subtitle="Drei Laender, ein Turnier." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HOST_NATIONS.map((nation) => (
          <div key={nation.code} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <FlagBar colors={nation.colors} className="mb-4" />
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xs font-mono text-zinc-500">{nation.code}</span>
              <h3 className="text-lg font-bold text-white">{nation.name}</h3>
            </div>
            <p className="text-xs text-zinc-400 mb-4">{nation.note}</p>
            <div className="flex flex-wrap gap-1">
              {nation.cities.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
