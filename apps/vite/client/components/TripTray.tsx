import { ArrowRight, MapPin, RotateCcw, Users } from "lucide-react"
import type { TripApi } from "../lib/useTrip"
import { buildQuote, byId, inr } from "../lib/yatra"

export function TripTray({ api }: { api: TripApi }) {
  const { trip, reset, savedAt } = api
  const q = buildQuote(trip)
  const names = trip.destinationIds.map((id) => byId(id)?.town.split(",")[0] ?? "").filter(Boolean)
  const hasStops = names.length > 0

  return (
    <aside aria-label="Your trip summary" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 shadow-2xl backdrop-blur" data-oid="92fe81d2f4" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-ds-lg px-ds-lg py-ds-md" data-oid="b66de60f52" data-oid-text-editable="false" data-oid-text-source="element:div|element:div|expression:b3bd19daeb75|element:p|element:div">
        <div className="flex min-w-0 flex-1 items-center gap-ds-md" data-oid="7d82713c76">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground" data-oid="14a2fdf61a">
            <MapPin className="h-5 w-5" data-oid="526bcd198f" />
          </span>
          <div className="min-w-0" data-oid="2331ec1ec5">
            <p className="text-caption font-medium uppercase text-muted-foreground" data-oid="ed1c3b52e2">Your Yatra</p>
            <p className="truncate text-body font-bold text-foreground" data-oid="c450e7ec4b">{hasStops ? `${trip.origin} → ${names.join(" → ")}` : "No temples added yet"}</p>
          </div>
        </div>

        <div className="hidden items-center gap-ds-sm md:flex" data-oid="ad0e031f90">
          <Users className="h-4 w-4 text-muted-foreground" data-oid="072825fee6" />
          <p className="text-label text-foreground" data-oid="16e52ea321" data-oid-text-editable="false" data-oid-text-source="expression:8428276ad1b1|text|expression:e804a80f525a|text|expression:58fc1ab213a2|text|expression:ed052d8d78aa">{q.pax} traveller{q.pax === 1 ? "" : "s"} · {q.days} day{q.days === 1 ? "" : "s"}</p>
        </div>

        {hasStops && (
          <div className="flex flex-col" data-oid="4fd110293e">
            <p className="text-caption font-medium text-warning-foreground" data-oid="6a3c6315c7">Estimate · requires verification</p>
            <p className="text-xl font-extrabold tracking-tight text-foreground" data-oid="42683aa7b0">{inr(q.total)}</p>
          </div>
        )}

        <p className="hidden text-caption text-muted-foreground xl:block" aria-live="polite" data-oid="1eeb62e003">{savedAt ? `Saved at ${savedAt}` : "Saves automatically"}</p>

        <div className="flex items-center gap-ds-sm" data-oid="4faf41860e" data-oid-text-editable="false" data-oid-text-source="expression:f142223bafbf|expression:e5822bd9d4f0">
          {hasStops && (
            <button type="button" onClick={reset} className="ds-button ds-button-secondary" data-oid="dd39a46224">
              <RotateCcw className="mr-ds-xs h-4 w-4" data-oid="12beafd6d4" />
              Start over
            </button>
          )}
          {hasStops ? (
            <a href="#itinerary" className="ds-button ds-button-primary" data-oid="6203e8ec62">
              See plan & price
              <ArrowRight className="ml-ds-xs h-4 w-4" data-oid="e961a3da57" />
            </a>
          ) : (
            <a href="#discover" className="ds-button ds-button-primary" data-oid="3b85588fdd">
              Choose temples
              <ArrowRight className="ml-ds-xs h-4 w-4" data-oid="136ce4fd4f" />
            </a>
          )}
        </div>
      </div>
    </aside>
  )
}
