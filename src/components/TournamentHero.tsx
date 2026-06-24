import { TOURNAMENT } from "@/data/wm2026";

export default function TournamentHero() {
  const opening = new Date(TOURNAMENT.openingMatch);
  const final = new Date(TOURNAMENT.finalMatch);

  const fmt = (d: Date) =>
    d.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <section className="relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
          {fmt(opening)} – {fmt(final)}
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight mb-6">
          FIFA Fussball-<br />Weltmeisterschaft 2026
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
          <Stat label="Teams" value={TOURNAMENT.teams} />
          <Stat label="Gruppen" value={TOURNAMENT.groups} />
          <Stat label="Spiele" value={TOURNAMENT.matches} />
          <Stat label="Stadion-Orte" value={TOURNAMENT.hostCities} />
          <Stat label="Gastgeber-Nationen" value={TOURNAMENT.hostNations} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-xs text-zinc-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}
