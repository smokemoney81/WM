import { HOST_CITIES } from "@/data/wm2026";
import SectionHeader from "./SectionHeader";

const countryColor: Record<string, string> = {
  Mexiko: "bg-emerald-900 text-emerald-300",
  Kanada: "bg-red-900 text-red-300",
  USA: "bg-blue-900 text-blue-300",
};

export default function HostCities() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-800">
      <SectionHeader title="Austragungsorte" subtitle="16 Stadien in 3 Laendern." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {HOST_CITIES.map((venue) => (
          <div
            key={venue.city}
            className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm truncate">{venue.city}</span>
                {venue.highlight && (
                  <span className="text-xs bg-yellow-900 text-yellow-300 px-1.5 py-0.5 rounded flex-shrink-0">
                    {venue.highlight}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 mt-0.5 truncate">{venue.stadium}</p>
            </div>
            <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${countryColor[venue.country]}`}>
              {venue.country}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
