import { CONFEDERATION_SLOTS } from "@/data/wm2026";
import SectionHeader from "./SectionHeader";

export default function Confederations() {
  const total = CONFEDERATION_SLOTS.reduce((s, c) => s + c.slots + c.playoff, 0);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-800">
      <SectionHeader
        title="Startplatz-Verteilung"
        subtitle={`${total} Plaetze auf 6 Konfoederationen.`}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500 text-xs uppercase tracking-wider border-b border-zinc-800">
              <th className="pb-3 pr-4">Konfoederation</th>
              <th className="pb-3 pr-4">Region</th>
              <th className="pb-3 pr-4 text-right">Direkt</th>
              <th className="pb-3 pr-4 text-right">Playoff</th>
              <th className="pb-3 text-right">Gesamt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {CONFEDERATION_SLOTS.map((c) => (
              <tr key={c.code} className="text-zinc-300">
                <td className="py-3 pr-4 font-mono font-semibold text-white">{c.code}</td>
                <td className="py-3 pr-4 text-zinc-400">{c.region}</td>
                <td className="py-3 pr-4 text-right">{c.slots}</td>
                <td className="py-3 pr-4 text-right text-zinc-500">{c.playoff}</td>
                <td className="py-3 text-right font-semibold text-white">{c.slots + c.playoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
