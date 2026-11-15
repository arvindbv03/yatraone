import { AlertTriangle, Car, Coffee, Landmark } from "lucide-react"
import type { Day, Trip } from "../lib/yatra"

const fmtH = (h: number) => {
  const r = Math.round(h * 2) / 2
  return r < 1 ? "under 1 hr" : `~${r} hr${r === 1 ? "" : "s"}`
}

export function ItineraryPreview({ days, trip }: { days: Day[]; trip: Trip }) {
  return (
    <div id="itinerary" className="scroll-mt-20" data-oid="172e90123e" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <p className="text-label font-semibold uppercase text-secondary" data-oid="ac215b40fe">Itinerary preview</p>
      <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="ac408a046a">Day by day, at your pace</h2>
      <p className="mt-ds-md flex items-start gap-ds-sm rounded-lg border border-warning bg-warning/10 p-ds-md text-label text-foreground" data-oid="210c5ace1d">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" data-oid="fd479a5ef3" />
        Estimated plan only. Driving distances and times are rough straight-line approximations; official temple timings, darshan slots and hotel availability all require verification before booking.
      </p>

      <ol className="mt-ds-xl space-y-ds-lg" data-oid="b6db34d7b1">
        {days.map((d) => (
          <li key={d.day} className="rounded-xl border border-border bg-card p-ds-lg" data-oid="a5351de5c9" data-oid-shared="true" data-oid-instance-targetable="true">
            <div className="flex items-baseline justify-between gap-ds-md" data-oid="2526765255" data-oid-shared="true" data-oid-instance-targetable="true">
              <h3 className="text-xl font-bold tracking-tight text-foreground" data-oid="834e1cb8a4" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="text|expression:ee2c6c2f26c0">Day {d.day}</h3>
              <p className="text-label text-muted-foreground" data-oid="ff33087767" data-oid-shared="true" data-oid-instance-targetable="true">{d.date}</p>
            </div>
            <ul className="mt-ds-md space-y-ds-md border-l-2 border-border pl-ds-lg" data-oid="2af2e20720" data-oid-shared="true" data-oid-instance-targetable="true">
              {d.legs.map((leg, i) => (
                <li key={i} className="relative" data-oid="70d289fa53" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="element:span|expression:e0e7c17663c9|expression:1af6fa0d2340|expression:03bcbd0011ca">
                  <span className="absolute -left-[37px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-muted text-primary" data-oid="3cfae86dec" data-oid-shared="true" data-oid-instance-targetable="true">
                    {leg.kind === "travel" ? <Car className="h-3.5 w-3.5" data-oid="8d7a2ada1f" data-oid-shared="true" /> : leg.kind === "visit" ? <Landmark className="h-3.5 w-3.5" data-oid="266d19a725" data-oid-shared="true" /> : <Coffee className="h-3.5 w-3.5" data-oid="bd53447d31" data-oid-shared="true" />}
                  </span>
                  {leg.kind === "travel" && (
                    <>
                      <p className="text-label font-semibold text-foreground" data-oid="9858b14e1a" data-oid-shared="true" data-oid-text-editable="false" data-oid-text-source="text|expression:60dc901f7a00|text|expression:6cb2e7169aea">Drive {leg.from} → {leg.to}</p>
                      <p className="text-caption text-muted-foreground" data-oid="5f4f85e26b" data-oid-shared="true" data-oid-text-editable="false" data-oid-text-source="text|expression:d75bf6264221|text|expression:025d6312e16a|expression:15eba192da8f|text">
                        Est. {Math.round(leg.km)} km · {fmtH(leg.hours)}{trip.restStops && leg.hours > 2 ? " incl. rest breaks" : ""} · requires verification
                      </p>
                    </>
                  )}
                  {leg.kind === "visit" && (
                    <>
                      <p className="text-label font-semibold text-foreground" data-oid="97882c68eb" data-oid-shared="true" data-oid-text-editable="false" data-oid-text-source="expression:b910ce72d2ac|text|expression:bc3ad4e9b563">{leg.dest.name}, {leg.dest.town}</p>
                      <p className="text-caption text-muted-foreground" data-oid="12a391206b" data-oid-shared="true" data-oid-text-editable="false" data-oid-text-source="text|expression:025d6312e16a|text|expression:a87fee87d511|text">
                        Allow {fmtH(leg.hours)} · {leg.dest.walking} walking · timings to be confirmed with temple authority
                      </p>
                    </>
                  )}
                  {leg.kind === "rest" && <p className="text-label text-muted-foreground" data-oid="642f0ca184" data-oid-shared="true">{leg.note}</p>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
