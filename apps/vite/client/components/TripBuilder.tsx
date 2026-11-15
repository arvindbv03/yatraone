import { Accessibility, AlertTriangle, ArrowDown, ArrowUp, CheckCircle2, X } from "lucide-react"
import type { TripApi } from "../lib/useTrip"
import { byId, DESTINATIONS, HOTELS, inr, ORIGINS, TRANSPORT, transportOption } from "../lib/yatra"

function Counter({ label, hint, value, min, max = 60, onChange }: { label: string; hint: string; value: number; min: number; max?: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-ds-md rounded-lg border border-border bg-background px-ds-md py-ds-sm" data-oid="72bdf6bbbd" data-oid-instance-targetable="true" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
      <div data-oid="3fd6ac9acc" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
        <p className="text-label font-semibold text-foreground" data-oid="1a141ac5ee" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{label}</p>
        <p className="text-caption text-muted-foreground" data-oid="b618aed101" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{hint}</p>
      </div>
      <div className="flex items-center gap-ds-sm" data-oid="8ad1a8b1a5" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
        <button type="button" aria-label={`Decrease ${label}`} disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))} className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-xl font-semibold text-foreground hover:border-primary hover:text-primary disabled:opacity-40" data-oid="d24a000a0d" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">−</button>
        <output aria-live="polite" className="w-8 text-center text-xl font-bold text-foreground" data-oid="b32b340fb9" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{value}</output>
        <button type="button" aria-label={`Increase ${label}`} disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))} className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-xl font-semibold text-foreground hover:border-primary hover:text-primary disabled:opacity-40" data-oid="e828d44bbb" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">+</button>
      </div>
    </div>
  )
}

export function TripBuilder({ api }: { api: TripApi }) {
  const { trip, update, toggleDestination, move, savedAt } = api
  const pax = trip.adults + trip.children + trip.seniors
  const t = transportOption(trip.transport)
  const notInTrip = DESTINATIONS.filter((d) => !trip.destinationIds.includes(d.id))
  const stopsVsDays = trip.destinationIds.length / Math.max(1, trip.days)

  return (
    <section id="builder" className="scroll-mt-20" data-oid="899d0f7edf" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-3xl" data-oid="1a5de43ae0">
        <div className="flex flex-col gap-ds-md md:flex-row md:items-end md:justify-between" data-oid="77f61945af">
          <div className="max-w-2xl" data-oid="47129f078b">
            <p className="text-label font-semibold uppercase text-secondary" data-oid="a2449be67c">Step 2 · Trip builder</p>
            <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="114be154ee">Dates & travellers</h2>
            <p className="mt-ds-md text-body text-muted-foreground" data-oid="d35ea3f82d">The plan and price update as you go.</p>
          </div>
          <div className="flex flex-col items-start gap-ds-xs md:items-end" data-oid="5033c68a0f">
            <p className="inline-flex items-center gap-ds-sm rounded-full border border-border bg-card px-ds-md py-ds-sm text-label font-semibold text-success" aria-live="polite" data-oid="50b3468fb1" data-oid-text-editable="false">
              <CheckCircle2 className="h-4 w-4" data-oid="fc29988f35" />
              {savedAt ? `Saved ${savedAt}` : "Auto-saves"}</p>
          </div>
        </div>

        <div className="mt-ds-xl grid gap-ds-lg lg:grid-cols-12" data-oid="5974381954">
          {/* Route */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-5" data-oid="3c7a4b20cf" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|element:ol|expression:926b75adb3b0|element:p|element:div">
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
                    <button type="button" aria-label={`Move ${d.name} up`} disabled={i === 0} onClick={() => move(i, -1)} className="rounded-md p-ds-sm text-muted-foreground hover:bg-muted hover:text-primary disabled:opacity-30" data-oid="f333a60abb" data-oid-shared="true"><ArrowUp className="h-4 w-4" data-oid="8cbf92c0c2" data-oid-shared="true" /></button>
                    <button type="button" aria-label={`Move ${d.name} down`} disabled={i === trip.destinationIds.length - 1} onClick={() => move(i, 1)} className="rounded-md p-ds-sm text-muted-foreground hover:bg-muted hover:text-primary disabled:opacity-30" data-oid="edca4e3fa8" data-oid-shared="true"><ArrowDown className="h-4 w-4" data-oid="6fec0be4da" data-oid-shared="true" /></button>
                    <button type="button" aria-label={`Remove ${d.name}`} onClick={() => toggleDestination(id)} className="rounded-md p-ds-sm text-muted-foreground hover:bg-muted hover:text-destructive" data-oid="210054fd4e" data-oid-shared="true"><X className="h-4 w-4" data-oid="1560d46c31" data-oid-shared="true" /></button>
                  </li>
                )
              })}
            </ol>
            {trip.destinationIds.length === 0 && (
              <div className="mt-ds-md rounded-lg border border-dashed border-border p-ds-md" data-oid="9dd28ca366">
                <p className="text-label text-muted-foreground" data-oid="31f8e738d8">No temples yet.</p>
                <a href="#discover" className="mt-ds-sm inline-block text-label font-semibold text-primary underline underline-offset-4" data-oid="afe0b8178d">Browse temples</a>
              </div>
            )}
            <p className="mt-ds-sm text-caption text-muted-foreground" data-oid="c56baadf62" data-oid-text-editable="false" data-oid-text-source="text|expression:67cc1984fff4">Returns to {trip.origin}</p>

            <div className="ds-field mt-ds-lg" data-oid="aef01d0180">
              <label htmlFor="add-stop" className="ds-field-label" data-oid="4f7532f41f">Add a temple</label>
              <div className="flex" data-oid="fdbd915022">
                <select id="add-stop" className="ds-input flex-1" defaultValue="" onChange={(e) => { if (e.target.value) { toggleDestination(e.target.value); e.target.value = "" } }} data-oid="56c009abf6" data-oid-text-editable="false" data-oid-text-source="element:option|expression:78f92ac15e2b">
                  <option value="" data-oid="a535e9776c">Select…</option>
                  {notInTrip.map((d) => (
                    <option key={d.id} value={d.id} data-oid="943fa2e170" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:c1f8af107f8f|text|expression:bcb9e1b213ec">{d.name} — {d.town}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Dates & travellers */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-4" data-oid="6c2d39e019" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|element:div|expression:cc62c7cb6345|expression:8b36aefea0c2">
            <h3 className="text-xl font-bold tracking-tight" data-oid="5d571dcaee">Dates & travellers</h3>
            <div className="mt-ds-md grid grid-cols-2 gap-ds-md" data-oid="b240fb2855">
              <div className="ds-field" data-oid="4afb39c960">
                <label htmlFor="start" className="ds-field-label" data-oid="4d31308c96">Start date</label>
                <input id="start" type="date" className="ds-input" value={trip.startDate} onChange={(e) => update({ startDate: e.target.value })} data-oid="3011b8858d" />
              </div>
              <div className="ds-field" data-oid="9e69985b0e">
                <label htmlFor="days" className="ds-field-label" data-oid="a8569e2f30">Days</label>
                <select id="days" className="ds-input" value={trip.days} onChange={(e) => update({ days: Number(e.target.value) })} data-oid="59805033fa">
                  <option value={1} data-oid="fb883f58b4">1 day</option>
                  <option value={2} data-oid="7ee857510b">2 days</option>
                  <option value={3} data-oid="feda511029">3 days</option>
                  <option value={4} data-oid="ba90217c98">4 days</option>
                  <option value={5} data-oid="1ed2140c86">5 days</option>
                  <option value={6} data-oid="04393bfaa5">6 days</option>
                  <option value={7} data-oid="9dbaad54e8">7 days</option>
                  <option value={8} data-oid="f9781587aa">8 days</option>
                  <option value={10} data-oid="18808d3e74">10 days</option>
                  <option value={14} data-oid="ad1ce948ab">14 days</option>
                </select>
              </div>
            </div>
            <div className="mt-ds-md space-y-ds-sm" data-oid="641f419de2">
              <Counter label="Adults" hint="Ages 12–59" value={trip.adults} min={0} onChange={(n) => update({ adults: n })} />
              <Counter label="Senior citizens" hint="60 and above" value={trip.seniors} min={0} onChange={(n) => update({ seniors: n })} />
              <Counter label="Children" hint="Under 12" value={trip.children} min={0} onChange={(n) => update({ children: n })} />
            </div>
            {pax === 0 ? (
              <p role="alert" className="mt-ds-md rounded-lg bg-warning/15 p-ds-sm text-label text-foreground" data-oid="e8258c3b6f">Add a traveller.</p>
            ) : (
              <p className="mt-ds-md text-label font-semibold text-foreground" data-oid="32576a9aa0" data-oid-text-editable="false" data-oid-text-source="expression:b62662e25443|text|expression:51e03b6188ff|text">{pax} traveller{pax === 1 ? "" : "s"} in total</p>
            )}
            {stopsVsDays > 2 && (
              <p className="mt-ds-sm rounded-lg bg-warning/15 p-ds-sm text-caption text-foreground" data-oid="8bb0a3008f">Busy schedule — consider adding a day.</p>
            )}
          </div>

          {/* Accessibility & services */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-3" data-oid="bf7aab65e2">
            <h3 className="flex items-center gap-ds-sm text-xl font-bold tracking-tight" data-oid="b67b2752a9"><Accessibility className="h-5 w-5 text-primary" data-oid="b657634bbe" />Accessibility</h3>
            <p className="mt-ds-xs text-caption text-muted-foreground" data-oid="40bafb31e8">Tick what applies.</p>
            <div className="mt-ds-md space-y-ds-sm" data-oid="61fa35e6e2">
              <label className="flex cursor-pointer items-center gap-ds-sm rounded-lg border border-border bg-background p-ds-md hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent" data-oid="8c7f0fc84a">
                <input type="checkbox" className="h-5 w-5 shrink-0 accent-[var(--primary)]" checked={trip.wheelchair} onChange={(e) => update({ wheelchair: e.target.checked })} data-oid="3bd138c100" />
                <span className="text-label text-foreground" data-oid="6a6acfe055">Wheelchair</span>
              </label>
              <label className="flex cursor-pointer items-center gap-ds-sm rounded-lg border border-border bg-background p-ds-md hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent" data-oid="260165e182">
                <input type="checkbox" className="h-5 w-5 shrink-0 accent-[var(--primary)]" checked={trip.lift} onChange={(e) => update({ lift: e.target.checked })} data-oid="98f9a6aa9f" />
                <span className="text-label text-foreground" data-oid="453614cbd1">Lift in hotel</span>
              </label>
              <label className="flex cursor-pointer items-center gap-ds-sm rounded-lg border border-border bg-background p-ds-md hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent" data-oid="8781b2787f">
                <input type="checkbox" className="h-5 w-5 shrink-0 accent-[var(--primary)]" checked={trip.restStops} onChange={(e) => update({ restStops: e.target.checked })} data-oid="3f5f500b40" />
                <span className="text-label text-foreground" data-oid="e5997cee72">Extra rest stops</span>
              </label>
            </div>
          </div>

          {/* Transport */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-7" data-oid="32953b700d" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|expression:a333cf11e876|expression:7e008eb5c989">
            <h3 className="text-xl font-bold tracking-tight" data-oid="ac1a18d93b">Vehicle</h3>
            <div className="ds-radio-group mt-ds-md grid gap-ds-sm sm:grid-cols-2" role="radiogroup" aria-label="Vehicle" data-oid="2eaed8031e">
              {TRANSPORT.map((v) => (
                <label key={v.id} className="ds-radio cursor-pointer rounded-lg border border-border bg-background p-ds-md hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent" data-oid="1450779924" data-oid-shared="true" data-oid-instance-targetable="true">
                  <input type="radio" name="transport" checked={trip.transport === v.id} onChange={() => update({ transport: v.id })} data-oid="5707ec331d" data-oid-shared="true" data-oid-instance-targetable="true" />
                  <span className="flex flex-col" data-oid="ed30e1e8de" data-oid-shared="true" data-oid-instance-targetable="true">
                    <span className="text-label font-semibold text-foreground" data-oid="8d7dae8d07" data-oid-shared="true" data-oid-instance-targetable="true">{v.label}</span>
                    <span className="text-caption text-muted-foreground" data-oid="983e88ca35" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:808e4ff53dca|text|expression:a24211ba5cf9|text|expression:43ce27a349fd">{v.seats} seats · {inr(v.perDay)}/day{v.wheelchair ? " · ramp" : ""}</span>
                  </span>
                </label>
              ))}
            </div>
            {trip.wheelchair && !t.wheelchair && (
              <p role="alert" className="mt-ds-md flex items-start gap-ds-sm rounded-lg bg-warning/15 p-ds-md text-label text-foreground" data-oid="c9346212be">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" data-oid="749edc83bc" />
                This vehicle has no wheelchair ramp.
              </p>
            )}
            {Math.ceil(pax / t.seats) > 1 && (
              <p className="mt-ds-sm text-caption text-muted-foreground" data-oid="d251afdcf5" data-oid-text-editable="false" data-oid-text-source="expression:7ea725318950|text|expression:b62662e25443|text">{Math.ceil(pax / t.seats)} vehicles needed for {pax} travellers.</p>
            )}
          </div>

          {/* Stay */}
          <div className="rounded-xl border border-border bg-card p-ds-lg lg:col-span-5" data-oid="2af25e00ee" data-oid-text-editable="false" data-oid-text-source="element:h3|element:div|expression:39ebfa6e102a">
            <h3 className="text-xl font-bold tracking-tight" data-oid="27e7d8e5c2">Stay</h3>
            <div className="ds-radio-group mt-ds-md flex flex-col gap-ds-sm" role="radiogroup" aria-label="Accommodation" data-oid="4b5f8e2dc7">
              {HOTELS.map((h) => (
                <label key={h.id} className="ds-radio cursor-pointer rounded-lg border border-border bg-background p-ds-md hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent" data-oid="110843232c" data-oid-shared="true" data-oid-instance-targetable="true">
                  <input type="radio" name="hotel" checked={trip.hotel === h.id} onChange={() => update({ hotel: h.id })} data-oid="34921315e0" data-oid-shared="true" data-oid-instance-targetable="true" />
                  <span className="flex flex-col" data-oid="37e42157e5" data-oid-shared="true" data-oid-instance-targetable="true">
                    <span className="text-label font-semibold text-foreground" data-oid="048e4a1d76" data-oid-shared="true" data-oid-instance-targetable="true">{h.label}</span>
                    <span className="text-caption text-muted-foreground" data-oid="8f21bbbe58" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:81c8185ffd03|text">{inr(h.perRoomNight)}/room/night</span>
                  </span>
                </label>
              ))}
            </div>
            {trip.lift && trip.hotel === "budget" && (
              <p className="mt-ds-md text-caption text-muted-foreground" data-oid="1c1371acca">Few guesthouses have lifts.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
