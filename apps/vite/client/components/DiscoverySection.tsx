import { Check, Footprints, MapPin, Plus, Search } from "lucide-react"
import { useMemo, useState } from "react"
import { DESTINATIONS } from "../lib/yatra"

const STATES = ["All", "Andhra Pradesh", "Tamil Nadu", "Karnataka", "Kerala"]

export function DiscoverySection({
  query,
  setQuery,
  selected,
  onToggle,
}: {
  query: string
  setQuery: (q: string) => void
  selected: string[]
  onToggle: (id: string) => void
}) {
  const [state, setState] = useState("All")
  const [category, setCategory] = useState("All")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DESTINATIONS.filter((d) => {
      if (state !== "All" && d.state !== state) return false
      if (category !== "All" && d.category !== category) return false
      if (!q) return true
      return [d.name, d.town, d.deity, d.circuit, d.state, d.category].join(" ").toLowerCase().includes(q)
    })
  }, [query, state, category])

  const filtered = query.trim() !== "" || state !== "All" || category !== "All"
  const clearAll = () => {
    setQuery("")
    setState("All")
    setCategory("All")
  }

  return (
    <section id="discover" className="scroll-mt-20 border-y border-border bg-card" data-oid="1a6538a133" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-3xl" data-oid="f6f1554dcd" data-oid-text-editable="false" data-oid-text-source="element:div|element:div|element:ul|expression:e863dd93a102">
        <div className="grid gap-ds-xl lg:grid-cols-12 lg:items-end" data-oid="5b3a8837aa">
          <div className="lg:col-span-5" data-oid="5b7a3957e3">
            <p className="text-label font-semibold uppercase text-secondary" data-oid="c6050d5f53">Step 1 · Pick temples</p>
            <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="81fb3dadb1">Choose your temples</h2>
            <p className="mt-ds-md text-body text-muted-foreground" data-oid="5f32a179ed">Walking effort is shown for each stop.</p>
          </div>
          <div className="flex flex-col gap-ds-md lg:col-span-7" data-oid="dfcb523c40">
            <div className="flex items-center gap-ds-sm rounded-lg border border-input bg-background px-ds-md" data-oid="55265d885a">
              <Search className="h-5 w-5 text-muted-foreground" data-oid="7eebcb8dd0" />
              <label htmlFor="discover-search" className="sr-only" data-oid="26f69500e4">Search destinations</label>
              <input
                id="discover-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Madurai, Vishnu, heritage circuit"
                className="h-12 w-full bg-transparent text-body outline-none placeholder:text-muted-foreground" data-oid="5b195797df"
              />
            </div>
            <div className="flex flex-wrap items-center gap-ds-sm" data-oid="ce72e9735d" data-oid-text-editable="false" data-oid-text-source="expression:19228ffd1a0f|element:label|element:select">
              {STATES.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={state === s}
                  onClick={() => setState(s)}
                  className="rounded-full border border-border bg-background px-ds-md py-ds-xs text-label font-semibold text-muted-foreground hover:border-primary aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground" data-oid="46c919e695" data-oid-shared="true" data-oid-instance-targetable="true"
                >
                  {s}
                </button>
              ))}
              <label htmlFor="cat" className="sr-only" data-oid="00a97f1deb">Category</label>
              <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)} className="ds-input ml-auto w-auto" data-oid="ddac30844c">
                <option value="All" data-oid="309e67589a">All categories</option>
                <option value="Temple" data-oid="1eff653655">Temple</option>
                <option value="Heritage site" data-oid="fa17afa41d">Heritage site</option>
                <option value="Coastal pilgrimage" data-oid="0b5fdd7a0f">Coastal pilgrimage</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-ds-xl flex flex-wrap items-center gap-ds-md" data-oid="c98402c77f" data-oid-text-editable="false" data-oid-text-source="element:p|expression:0d428d103349|expression:817502cf5068">
          <p className="text-label text-muted-foreground" data-oid="f73a6d4a70" data-oid-text-editable="false" data-oid-text-source="expression:4d75694edc50|text|expression:6227937a6f2d">{results.length} places{selected.length > 0 ? ` · ${selected.length} in trip` : ""}</p>
          {filtered && (
            <button type="button" onClick={clearAll} className="text-label font-semibold text-primary underline underline-offset-4" data-oid="8253930db4">Clear filters</button>
          )}
          {selected.length > 0 && (
            <a href="#builder" className="ml-auto ds-button ds-button-primary" data-oid="4346b4c131">Next step</a>
          )}
        </div>
        <ul className="mt-ds-md grid gap-ds-md sm:grid-cols-2 xl:grid-cols-3" data-oid="2cd9589294">
          {results.map((d, index) => {
            const added = selected.includes(d.id)
            return (
              <li key={d.id} data-index={index} className="flex flex-col rounded-xl border border-border bg-background p-ds-lg transition-colors hover:border-primary" data-oid="fdaebb2503" data-oid-shared="true" data-oid-instance-targetable="true">
                <div className="flex items-start justify-between gap-ds-sm" data-oid="bae42e1d64" data-oid-shared="true" data-oid-instance-targetable="true">
                  <span className="rounded-md bg-muted px-ds-sm py-ds-xs text-caption font-medium text-muted-foreground" data-oid="9908777ce7" data-oid-shared="true" data-oid-instance-targetable="true">{d.category}</span>
                  <span className="text-caption font-medium text-primary" data-oid="f268c56a18" data-oid-shared="true" data-oid-instance-targetable="true">{d.circuit}</span>
                </div>
                <h3 className="mt-ds-md text-xl font-bold tracking-tight text-foreground" data-oid="ef65ad8534" data-oid-shared="true" data-oid-instance-targetable="true">{d.name}</h3>
                <p className="mt-ds-xs flex items-center gap-ds-xs text-label text-muted-foreground" data-oid="29a4ac0629" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false">
                  <MapPin className="h-4 w-4" data-oid="177c00aa49" data-oid-shared="true" data-oid-instance-targetable="true" />
                  {d.town}, {d.state}
                </p>
                <p className="mt-ds-xs text-label text-foreground" data-oid="a41e106e5a" data-oid-shared="true" data-oid-instance-targetable="true">{d.deity}</p>
                <p className="mt-ds-sm line-clamp-2 flex-1 text-label leading-relaxed text-muted-foreground" data-oid="b35158d1e9" data-oid-shared="true" data-oid-instance-targetable="true">{d.description}</p>
                <div className="mt-ds-lg flex items-center justify-between gap-ds-sm" data-oid="6c834737ae" data-oid-shared="true" data-oid-instance-targetable="true">
                  <span className="flex items-center gap-ds-xs text-caption font-medium text-muted-foreground" data-oid="fa704c694d" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false">
                    <Footprints className="h-4 w-4" data-oid="f64f796018" data-oid-shared="true" data-oid-instance-targetable="true" />
                    {d.walking} walking
                  </span>
                  <button
                    type="button"
                    aria-pressed={added}
                    onClick={() => onToggle(d.id)}
                    className="ds-button ds-button-secondary aria-pressed:bg-primary aria-pressed:text-primary-foreground" data-oid="27ac5d93c7" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:d5e804dc0d13|expression:758efc9b68c3"
                  >
                    {added ? <Check className="mr-ds-xs h-4 w-4" data-oid="10d85c6a45" data-oid-shared="true" /> : <Plus className="mr-ds-xs h-4 w-4" data-oid="89ce0eeade" data-oid-shared="true" />}
                    {added ? "In trip" : "Add to trip"}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
        {results.length === 0 && (
          <div className="mt-ds-lg rounded-lg border border-dashed border-border p-ds-xl text-center" data-oid="3d7d9b6f18">
            <p className="text-body text-muted-foreground" data-oid="cb08cfc8c8">No matches.</p>
            <button type="button" onClick={clearAll} className="ds-button ds-button-secondary mt-ds-md" data-oid="2782b717c7">Show all</button>
          </div>
        )}
      </div>
    </section>
  )
}
