import { useState } from "react"
import { ArrowRight, MapPin, Search, ShieldCheck } from "lucide-react"
import { assetPath } from "../lib/assetPath"
import { byId, type Trip } from "../lib/yatra"

export function HeroSection({ trip, onSearch }: { trip: Trip; onSearch: (q: string) => void }) {
  const [q, setQ] = useState("")
  const route = [trip.origin, ...trip.destinationIds.map((id) => byId(id)?.town.split(",")[0] ?? "")]
  const pax = trip.adults + trip.children + trip.seniors

  const submit = (value: string) => {
    onSearch(value)
    document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative overflow-hidden" data-oid="d2de059823" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent opacity-70 blur-3xl" data-oid="dae16c504b" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-muted blur-3xl" data-oid="776fd02aee" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-ds-2xl px-ds-lg pb-ds-3xl pt-ds-2xl lg:grid-cols-12 lg:pt-ds-3xl" data-oid="dd78b79614">
        <div className="lg:col-span-6" data-oid="f8eba61fa9">
          <p className="inline-flex items-center gap-ds-sm rounded-full border border-border bg-card px-ds-md py-ds-xs text-label font-semibold text-primary" data-oid="df54adb299">
            <MapPin className="h-4 w-4" data-oid="ce3a778a4c" />
            Now planning journeys across South India
          </p>
          <h1 className="mt-ds-lg text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground md:text-[64px]" data-oid="a82ffbbaaa">
            Pilgrimages planned around the people you travel with.
          </h1>
          <p className="mt-ds-lg max-w-xl text-lg leading-relaxed text-muted-foreground" data-oid="45d83227d4">
            Build a multi-temple Yatra for your family, parents or group — verified hotels, drivers and guides, senior-friendly pacing, and itemized estimates before anything is booked.
          </p>

          <form
            className="mt-ds-xl flex flex-col gap-ds-sm rounded-xl border border-border bg-card p-ds-sm shadow-lg sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              submit(q)
            }} data-oid="134b85ee0a"
          >
            <label htmlFor="hero-search" className="sr-only" data-oid="a5cd934e26">Search temple, city, circuit or deity</label>
            <div className="flex flex-1 items-center gap-ds-sm px-ds-sm" data-oid="b9725df9c5">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" data-oid="719df9907f" />
              <input
                id="hero-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search temple, city, circuit or deity"
                className="h-12 w-full bg-transparent text-body text-foreground outline-none placeholder:text-muted-foreground" data-oid="8a53dc5a61"
              />
            </div>
            <button type="submit" className="ds-button ds-button-secondary" data-oid="84a128cbe8">Search</button>
          </form>

          <div className="mt-ds-md flex flex-wrap items-center gap-ds-sm" data-oid="4eba0ed72f">
            <span className="text-label font-semibold text-muted-foreground" data-oid="b75bc7454f">Popular:</span>
            <button type="button" onClick={() => submit("Tirupati")} className="rounded-full border border-border bg-card px-ds-md py-ds-xs text-label text-foreground hover:border-primary hover:text-primary" data-oid="bb73e28d4f">Tirupati</button>
            <button type="button" onClick={() => submit("Rameswaram")} className="rounded-full border border-border bg-card px-ds-md py-ds-xs text-label text-foreground hover:border-primary hover:text-primary" data-oid="136d4cbd81">Rameswaram</button>
            <button type="button" onClick={() => submit("heritage")} className="rounded-full border border-border bg-card px-ds-md py-ds-xs text-label text-foreground hover:border-primary hover:text-primary" data-oid="2954eb1ee6">Heritage circuit</button>
            <button type="button" onClick={() => submit("Shiva")} className="rounded-full border border-border bg-card px-ds-md py-ds-xs text-label text-foreground hover:border-primary hover:text-primary" data-oid="26868dcc55">Shiva</button>
          </div>

          <div className="mt-ds-xl flex flex-wrap gap-ds-md" data-oid="2b4eb7ced4">
            <a href="#builder" className="ds-button ds-button-primary" data-oid="bf1fe5a3f4">
              Build a Yatra
              <ArrowRight className="ml-ds-xs h-4 w-4" data-oid="a564e1da58" />
            </a>
            <a href="#packages" className="ds-button ds-button-secondary" data-oid="950a3c03fd">Request a Managed Yatra</a>
          </div>
        </div>

        <div className="relative lg:col-span-6" data-oid="f068f26e11">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-xl bg-muted shadow-2xl lg:-rotate-1" data-oid="2de9f07213">
            <img
              src={assetPath("mercury-stock/adobe-stock-449306342-54b6783708fc.jpg")}
              alt="Temple gopuram in Kanchipuram at sunrise"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.hidden = true
              }} data-oid="bdc098c848"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" data-oid="161c1847b5" />
            <p className="absolute bottom-ds-md right-ds-md text-caption text-primary-foreground" data-oid="8fa59c9b15">Kanchipuram, Tamil Nadu</p>
          </div>

          <div className="relative -mt-ds-3xl max-w-sm rounded-xl border border-border bg-card p-ds-lg shadow-xl lg:absolute lg:bottom-ds-xl lg:left-0 lg:mt-0" data-oid="9474837878">
            <p className="text-caption font-medium uppercase text-muted-foreground" data-oid="3bbaf12a32">Your draft Yatra</p>
            <p className="mt-ds-sm text-label font-semibold text-foreground" data-oid="a20ea21d87">{route.join(" → ")}</p>
            <p className="mt-ds-xs text-label text-muted-foreground" data-oid="8993a05a57" data-oid-text-editable="false" data-oid-text-source="expression:5fa3d57571c1|text|expression:b62662e25443|text|expression:23376227b278|text|expression:aa9e3e529011">
              {trip.days} days · {pax} travellers · {trip.seniors} senior{trip.seniors === 1 ? "" : "s"}
            </p>
            <p className="mt-ds-md flex items-center gap-ds-sm text-caption font-medium text-success" data-oid="d78a716b22">
              <ShieldCheck className="h-4 w-4" data-oid="1da3413cd6" />
              Wheelchair needs carried through every step
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
