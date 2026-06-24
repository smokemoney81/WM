import { STAGES } from "@/data/wm2026";
import SectionHeader from "./SectionHeader";

export default function Stages() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-800">
      <SectionHeader title="Turnierverlauf" subtitle="Von der Gruppenphase bis zum Finale." />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
        <ol className="space-y-6 ml-4">
          {STAGES.map((stage, i) => (
            <li key={i} className="relative pl-8">
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-500" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <span className="font-semibold text-white">{stage.phase}</span>
                  <span className="ml-2 text-sm text-zinc-500">{stage.detail}</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono flex-shrink-0">{stage.dates}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
