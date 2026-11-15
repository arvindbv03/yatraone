import { AlertTriangle, ArrowDown, ArrowUp, Plus, Save, X } from "lucide-react"
import type { TripApi } from "../lib/useTrip"
import { byId, DESTINATIONS, HOTELS, ORIGINS, TRANSPORT, transportOption } from "../lib/yatra"

function Counter({ label, hint, value, min, onChange }: { label: string; hint: string; value: number; min: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-ds-md rounded-lg border border-border bg-background px-ds-md py-ds-sm" data-oid="72bdf6bbbd" data-oid-instance-targetable="true" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
      <div data-oid="3fd6ac9acc" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
        <p className="text-label font-semibold text-foreground" data-oid="1a141ac5ee" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{label}</p>
        <p className="text-caption text-muted-foreground" data-oid="b618aed101" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{hint}</p>
      </div>
      <div className="flex items-center gap-ds-sm" data-oid="8ad1a8b1a5" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
        <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, value - 1))} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:border-primary" data-oid="d24a000a0d" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">−</button>
        <output className="w-6 text-center text-body font-semibold" data-oid="b32b340fb9" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{value}</output>
        <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(Math.min(60, value + 1))} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:border-primary" data-oid="e828d44bbb" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">+</button>
      </div>
    </div>
  )
}

export function TripBuilder({ api }: { api: TripApi }) {
  const { trip, update, toggleDestination, move, saveDraft, savedAt } = api
  const pax = trip.adults + trip.children + trip.seniors
  const t = transportOption(trip.transport)
  const notInTrip = DESTINATIONS.filter((d) => !trip.destinationIds.includes(d.id))

  return (
    <section id="builder" className="scroll-mt-20" data-oid="899d0f7edf" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-3xl" data-oid="1a5de43ae0">
        <div className="flex flex-col gap-ds-md md:flex-row md:items-end md:justify-between" data-oid="77f61945af">
          <div className="max-w-2xl" data-oid="47129f078b">
            <p className="text-label font-semibold uppercase text-secondary" data-oid="a2449be67c">Trip builder</p>
            <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="114be154ee">Shape your Yatra, stop by stop</h2>
            <p className="mt-ds-md text-body text-muted-foreground" data-oid="d35ea3f82d">Changes to stops, dates or travellers recalculate the itinerary and estimate below instantly.</p>
          </div>
          <div className="flex flex-col items-start gap-ds-xs md:items-end" data-oid="5033c68a0f">
            <button type="button" onClick={saveDraft} className="ds-button ds-button-primary" data-oid="f2cc3f406c">
              <Save className="mr-ds-xs h-4 w-4" data-oid="516f0eaba7" />
              Save draft
            </button>
            <p className="text-caption text-muted-foreground" aria-live="polite" data-oid="50b3468fb1">{savedAt ? `Draft saved on this device at ${savedAt}` : "Drafts are stored only in this browser"}</p>
          </div>
        </div>

        <div className="mt-ds-xl grid gap-ds-lg lg:grid-cols-12" data-oid="5974381954">
          {/* Route */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-5" data-oid="3c7a4b20cf" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|element:ol|expression:640ea30d8ca2|element:p|element:div">
            <h3 className="text-xl font-bold tracking-tight" data-oid="42bce507d9">Route</h3>
            <div className="ds-field mt-ds-md" data-oid="c0c5c3a8b5">
              <label htmlFor="origin" className="ds-field-label" data-oid="6b2902cc64">Starting from</label>
              <select id="origin" className="ds-input" value={trip.origin} onChange={(e) => update({ origin: e.target.value })} data-oid="6bf1fb064b">
                {Object.keys(ORIGINS).map((o) => (
                  <option key={o} value={o} data-oid="7dd130c228" data-oid-shared="true" data-oid-instance-targetable="true">{o}</option>
                ))}
              </select>
            </div>

            <ol className="relative mt-ds-lg space-y-ds-sm" data-oid="165a5e9c4a">
              {trip.destinationIds.map((id, i) => {
                const d = byId(id)
                if (!d) return null
                return (
                  <li key={id} className="flex items-center gap-ds-sm rounded-lg border border-border bg-background p-ds-sm" data-oid="175de4db8b" data-oid-shared="true">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-label font-semibold text-primary-foreground" data-oid="0e8485b121" data-oid-shared="true">{i + 1}</span>
                    <div className="min-w-0 flex-1" data-oid="e323a5f3f0" data-oid-shared="true">
                      <p className="truncate text-label font-semibold text-foreground" data-oid="c9c8d23c14" data-oid-shared="true">{d.name}</p>
                      <p className="truncate text-caption text-muted-foreground" data-oid="c0044d20a1" data-oid-shared="true">{d.town}</p>
                    </div>
                    <button type="button" aria-label={`Move ${d.name} up`} disabled={i === 0} onClick={() => move(i, -1)} className="rounded-md p-ds-xs text-muted-foreground hover:bg-muted disabled:opacity-30" data-oid="f333a60abb" data-oid-shared="true"><ArrowUp className="h-4 w-4" data-oid="8cbf92c0c2" data-oid-shared="true" /></button>
                    <button type="button" aria-label={`Move ${d.name} down`} disabled={i === trip.destinationIds.length - 1} onClick={() => move(i, 1)} className="rounded-md p-ds-xs text-muted-foreground hover:bg-muted disabled:opacity-30" data-oid="edca4e3fa8" data-oid-shared="true"><ArrowDown className="h-4 w-4" data-oid="6fec0be4da" data-oid-shared="true" /></button>
                    <button type="button" aria-label={`Remove ${d.name}`} onClick={() => toggleDestination(id)} className="rounded-md p-ds-xs text-muted-foreground hover:bg-muted hover:text-destructive" data-oid="210054fd4e" data-oid-shared="true"><X className="h-4 w-4" data-oid="1560d46c31" data-oid-shared="true" /></button>
                  </li>
                )
              })}
            </ol>
            {trip.destinationIds.length === 0 && <p className="mt-ds-md rounded-lg border border-dashed border-border p-ds-md text-label text-muted-foreground" data-oid="9dd28ca366">No stops yet. Add destinations below or from the discovery list.</p>}
            <p className="mt-ds-sm text-caption text-muted-foreground" data-oid="c56baadf62" data-oid-text-editable="false" data-oid-text-source="text|expression:67cc1984fff4|text">Return to {trip.origin} on the final day.</p>

            <div className="ds-field mt-ds-lg" data-oid="aef01d0180">
              <label htmlFor="add-stop" className="ds-field-label" data-oid="4f7532f41f">Add a stop</label>
              <div className="flex gap-ds-sm" data-oid="fdbd915022">
                <select id="add-stop" className="ds-input flex-1" defaultValue="" onChange={(e) => { if (e.target.value) { toggleDestination(e.target.value); e.target.value = "" } }} data-oid="56c009abf6" data-oid-text-editable="false" data-oid-text-source="element:option|expression:9033ab0d038a">
                  <option value="" data-oid="a535e9776c">Choose a destination…</option>
                  {notInTrip.map((d) => (
                    <option key={d.id} value={d.id} data-oid="943fa2e170" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:c1f8af107f8f|text|expression:bcb9e1b213ec">{d.name} — {d.town}</option>
                  ))}
                </select>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-muted text-muted-foreground" data-oid="f43ecc8ec9"><Plus className="h-4 w-4" data-oid="af25c44461" /></span>
              </div>
            </div>
          </div>

          {/* Dates & travellers */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-4" data-oid="6c2d39e019">
            <h3 className="text-xl font-bold tracking-tight" data-oid="5d571dcaee">Dates & travellers</h3>
            <div className="mt-ds-md grid grid-cols-2 gap-ds-md" data-oid="b240fb2855">
              <div className="ds-field" data-oid="4afb39c960">
                <label htmlFor="start" className="ds-field-label" data-oid="4d31308c96">Start date</label>
                <input id="start" type="date" className="ds-input" value={trip.startDate} onChange={(e) => update({ startDate: e.target.value })} data-oid="3011b8858d" />
              </div>
              <div className="ds-field" data-oid="9e69985b0e">
                <label htmlFor="days" className="ds-field-label" data-oid="a8569e2f30">Duration (days)</label>
                <input id="days" type="number" min={1} max={14} className="ds-input" value={trip.days} onChange={(e) => update({ days: Math.max(1, Math.min(14, Number(e.target.value) || 1)) })} data-oid="59805033fa" />
              </div>
            </div>
            <div className="mt-ds-md space-y-ds-sm" data-oid="641f419de2">
              <Counter label="Adults" hint="Ages 12–59" value={trip.adults} min={0} onChange={(n) => update({ adults: n })} />
              <Counter label="Senior citizens" hint="60 and above" value={trip.seniors} min={0} onChange={(n) => update({ seniors: n })} />
              <Counter label="Children" hint="Under 12" value={trip.children} min={0} onChange={(n) => update({ children: n })} />
            </div>
            <p className="mt-ds-md text-label text-muted-foreground" data-oid="b3dcb64422" data-oid-text-editable="false" data-oid-text-source="expression:b62662e25443|text|expression:51e03b6188ff|text">{pax} traveller{pax === 1 ? "" : "s"} in total</p>
          </div>

          {/* Accessibility & services */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-3" data-oid="bf7aab65e2">
            <h3 className="text-xl font-bold tracking-tight" data-oid="b67b2752a9">Accessibility</h3>
            <div className="mt-ds-md space-y-ds-sm" data-oid="61fa35e6e2">
              <label className="flex cursor-pointer items-start gap-ds-sm rounded-lg border border-border bg-background p-ds-sm has-[:checked]:border-primary" data-oid="8c7f0fc84a">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" checked={trip.wheelchair} onChange={(e) => update({ wheelchair: e.target.checked })} data-oid="3bd138c100" />
                <span className="text-label text-foreground" data-oid="6a6acfe055">Wheelchair assistance</span>
              </label>
              <label className="flex cursor-pointer items-start gap-ds-sm rounded-lg border border-border bg-background p-ds-sm has-[:checked]:border-primary" data-oid="260165e182">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" checked={trip.lift} onChange={(e) => update({ lift: e.target.checked })} data-oid="98f9a6aa9f" />
                <span className="text-label text-foreground" data-oid="453614cbd1">Hotels with lift access</span>
              </label>
              <label className="flex cursor-pointer items-start gap-ds-sm rounded-lg border border-border bg-background p-ds-sm has-[:checked]:border-primary" data-oid="e8258c3b6f">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" checked={trip.restStops} onChange={(e) => update({ restStops: e.target.checked })} data-oid="3f5f500b40" />
                <span className="text-label text-foreground" data-oid="e5997cee72">Frequent rest stops</span>
              </label>
            </div>
          </div>

          {/* Transport */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-7" data-oid="32953b700d" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|expression:48017e224607|expression:030a0303e173">
            <h3 className="text-xl font-bold tracking-tight" data-oid="ac1a18d93b">Transport</h3>
            <div className="ds-radio-group mt-ds-md grid gap-ds-sm sm:grid-cols-2" role="radiogroup" aria-label="Vehicle" data-oid="2eaed8031e">
              {TRANSPORT.map((v) => (
                <label key={v.id} className="ds-radio rounded-lg border border-border bg-background p-ds-sm has-[:checked]:border-primary" data-oid="1450779924" data-oid-shared="true" data-oid-instance-targetable="true">
                  <input type="radio" name="transport" checked={trip.transport === v.id} onChange={() => update({ transport: v.id })} data-oid="5707ec331d" data-oid-shared="true" data-oid-instance-targetable="true" />
                  <span className="text-label" data-oid="ed30e1e8de" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:20835b9bbde1|text|expression:808e4ff53dca|text">{v.label} · up to {v.seats} seats</span>
                </label>
              ))}
            </div>
            {trip.wheelchair && !t.wheelchair && (
              <p role="alert" className="mt-ds-md flex items-start gap-ds-sm rounded-lg bg-warning/15 p-ds-md text-label text-foreground" data-oid="c9346212be" data-oid-text-editable="false">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" data-oid="749edc83bc" />
                You asked for wheelchair assistance, but the {t.label} is not wheelchair-accessible. We won’t switch it for you — choose the accessible van or confirm this vehicle works for your group.
              </p>
            )}
            {Math.ceil(pax / t.seats) > 1 && (
              <p className="mt-ds-sm text-caption text-muted-foreground" data-oid="d251afdcf5" data-oid-text-editable="false" data-oid-text-source="expression:7ea725318950|text|expression:b62662e25443|text">{Math.ceil(pax / t.seats)} vehicles needed for {pax} travellers.</p>
            )}
          </div>

          {/* Stay */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-5" data-oid="2af25e00ee" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|expression:c50ae1628f0b">
            <h3 className="text-xl font-bold tracking-tight" data-oid="27e7d8e5c2">Stay</h3>
            <div className="ds-radio-group mt-ds-md flex flex-col gap-ds-sm" role="radiogroup" aria-label="Accommodation" data-oid="4b5f8e2dc7">
              {HOTELS.map((h) => (
                <label key={h.id} className="ds-radio rounded-lg border border-border bg-background p-ds-sm has-[:checked]:border-primary" data-oid="110843232c" data-oid-shared="true" data-oid-instance-targetable="true">
                  <input type="radio" name="hotel" checked={trip.hotel === h.id} onChange={() => update({ hotel: h.id })} data-oid="34921315e0" data-oid-shared="true" data-oid-instance-targetable="true" />
                  <span className="text-label" data-oid="37e42157e5" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:d4539355fba1|text|element:span">{h.label} — <span className="text-muted-foreground" data-oid="8f21bbbe58" data-oid-shared="true" data-oid-instance-targetable="true">{h.note}</span></span>
                </label>
              ))}
            </div>
            {trip.lift && trip.hotel === "budget" && (
              <p className="mt-ds-md text-caption text-muted-foreground" data-oid="1c1371acca">Lift access is less common in guesthouses; we’ll only shortlist properties that list a lift.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
