import { useState } from "react"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { assetPath } from "../lib/assetPath"
import type { Trip } from "../lib/yatra"

export function PackagesSection({ onLoad }: { onLoad: (patch: Partial<Trip>) => void }) {
  const [sent, setSent] = useState<string | null>(null)

  const load = (patch: Partial<Trip>) => {
    onLoad(patch)
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="packages" className="scroll-mt-20" data-oid="2c7a9dbef4" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-3xl" data-oid="2b61599fd5">
        <div className="max-w-2xl" data-oid="18a70ef030">
          <p className="text-label font-semibold uppercase text-secondary" data-oid="e94c764945">Curated packages</p>
          <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="924198b17f">Ready-made circuits</h2>
          <p className="mt-ds-md text-body text-muted-foreground" data-oid="86d4c18f2d">Start here, then adjust anything.</p>
        </div>

        <div className="mt-ds-xl grid gap-ds-lg lg:grid-cols-12" data-oid="9d8f5f4a99">
          <article className="group relative overflow-hidden rounded-xl bg-muted lg:col-span-7 lg:row-span-2" data-oid="1a0ddbddca">
            <img src={assetPath("mercury-stock/adobe-stock-363119335-387b3ad0636c.jpg")} alt="Aerial view of Tirupati town and hills" className="h-full min-h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.hidden = true }} data-oid="205be9192a" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" data-oid="5ae2346c87" />
            <div className="absolute inset-x-0 bottom-0 p-ds-xl text-primary-foreground" data-oid="86c9f0d1cf">
              <span className="rounded-full bg-secondary px-ds-sm py-ds-xs text-caption font-medium text-secondary-foreground" data-oid="69abd92083">Most planned</span>
              <h3 className="mt-ds-md text-3xl font-extrabold tracking-tight" data-oid="6449cc719d">Tirupati circuit</h3>
              <p className="mt-ds-xs text-body opacity-90" data-oid="1bca512222">Bengaluru → Tirupati → Srikalahasti → Kanipakam → Bengaluru</p>
              <div className="mt-ds-md flex flex-wrap items-center gap-ds-lg" data-oid="11021d010a">
                <p className="flex items-center gap-ds-xs text-label" data-oid="905fe771d5"><Clock className="h-4 w-4" data-oid="268df76f5c" />4 days, relaxed pace</p>
                <p className="text-label" data-oid="1582355d8b">From an est. ₹38,000 for a family of 6</p>
              </div>
              <button type="button" onClick={() => load({ origin: "Bengaluru", destinationIds: ["tirumala", "srikalahasti", "kanipakam"], days: 4 })} className="ds-button ds-button-secondary mt-ds-lg" data-oid="34c9649eb9">
                Customise this circuit
                <ArrowRight className="ml-ds-xs h-4 w-4" data-oid="696874b7aa" />
              </button>
            </div>
          </article>

          <article className="flex overflow-hidden rounded-xl border border-border bg-card lg:col-span-5" data-oid="d1aca89d3f">
            <div className="w-2/5 shrink-0 bg-muted" data-oid="f8686171b1">
              <img src={assetPath("mercury-stock/adobe-stock-363124019-85299d8d7ff4.jpg")} alt="Meenakshi Amman temple gopurams in Madurai" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.hidden = true }} data-oid="306cb06a69" />
            </div>
            <div className="flex flex-col p-ds-lg" data-oid="b7a9834f07">
              <h3 className="text-xl font-bold tracking-tight" data-oid="ce19f644f5">Rameswaram circuit</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="f834d28485">Madurai → Rameswaram → Dhanushkodi</p>
              <p className="mt-ds-sm flex items-center gap-ds-xs text-caption text-muted-foreground" data-oid="cae887cb0b"><Clock className="h-4 w-4" data-oid="42dd04eba0" />3 days · coastal drive over Pamban</p>
              <button type="button" onClick={() => load({ origin: "Madurai", destinationIds: ["madurai", "rameswaram", "dhanushkodi"], days: 3 })} className="mt-auto pt-ds-md text-left text-label font-semibold text-primary hover:underline" data-oid="ea1caaca1a">Customise this circuit →</button>
            </div>
          </article>

          <article className="flex overflow-hidden rounded-xl border border-border bg-card lg:col-span-5" data-oid="6f544fd092">
            <div className="w-2/5 shrink-0 bg-muted" data-oid="e5e027ca18">
              <img src={assetPath("mercury-stock/adobe-stock-353671939-dcabc92d2324.jpg")} alt="Brihadeeswarar temple in Thanjavur" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.hidden = true }} data-oid="3eaf69082b" />
            </div>
            <div className="flex flex-col p-ds-lg" data-oid="8440ce2d92">
              <h3 className="text-xl font-bold tracking-tight" data-oid="7f0ced62cd">Tamil Nadu heritage circuit</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="e7c50de277">Kanchipuram → Chidambaram → Thanjavur</p>
              <p className="mt-ds-sm flex items-center gap-ds-xs text-caption text-muted-foreground" data-oid="5a42889151"><Clock className="h-4 w-4" data-oid="8a156c594f" />5 days · Chola architecture</p>
              <button type="button" onClick={() => load({ origin: "Chennai", destinationIds: ["kanchipuram", "chidambaram", "thanjavur"], days: 5 })} className="mt-auto pt-ds-md text-left text-label font-semibold text-primary hover:underline" data-oid="848cf0d287">Customise this circuit →</button>
            </div>
          </article>
        </div>

        {/* Managed Yatra */}
        <div className="mt-ds-3xl grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-12" data-oid="55d48f2a57">
          <div className="bg-accent p-ds-xl lg:col-span-5" data-oid="5ddc5c1c91">
            <p className="text-label font-semibold uppercase text-accent-foreground" data-oid="3429f42a11">Managed Yatra</p>
            <h3 className="mt-ds-sm text-heading font-bold text-foreground" data-oid="71847337a9">Prefer we plan it for you?</h3>
            <p className="mt-ds-md text-body text-muted-foreground" data-oid="625befa49c">Share the basics and we’ll send a quote.</p>
            <ol className="mt-ds-lg space-y-ds-sm" data-oid="23944c10db">
              <li className="text-label text-foreground" data-oid="9f1609e5ed">1. Share your plans</li>
              <li className="text-label text-foreground" data-oid="fa5f897830">2. Get a quote</li>
              <li className="text-label text-foreground" data-oid="bec1049736">3. Approve and pay advance</li>
              <li className="text-label text-foreground" data-oid="a48fc8df11">4. Meet your coordinator</li>
            </ol>
          </div>
          <form
            className="grid gap-ds-md p-ds-xl sm:grid-cols-2 lg:col-span-7"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(`MY-DEMO-${Math.floor(1000 + Math.random() * 9000)}`)
              e.currentTarget.reset()
            }} data-oid="6b7b1cee36" data-oid-text-editable="false" data-oid-text-source="element:div|element:div|element:div|element:div|element:div|element:div|expression:47a89c052e21"
          >
            <div className="ds-field sm:col-span-2" data-oid="e69512022c">
              <label htmlFor="my-dest" className="ds-field-label" data-oid="0522417499">Destinations</label>
              <input id="my-dest" required className="ds-input" placeholder="e.g. Navagraha temples around Kumbakonam" data-oid="c39df7d1b8" />
            </div>
            <div className="ds-field" data-oid="7db6b5926d">
              <label htmlFor="my-from" className="ds-field-label" data-oid="aaf3e22fc5">Preferred start date</label>
              <input id="my-from" type="date" required className="ds-input" data-oid="9f1e6b4a8f" />
            </div>
            <div className="ds-field" data-oid="e10e7634bd">
              <label htmlFor="my-to" className="ds-field-label" data-oid="ab4e4343f0">Return date</label>
              <input id="my-to" type="date" className="ds-input" data-oid="56c79081c9" />
            </div>
            <div className="ds-field" data-oid="9f6745e339">
              <label htmlFor="my-pax" className="ds-field-label" data-oid="003a7f191c">Passengers</label>
              <input id="my-pax" type="number" min={1} max={200} required className="ds-input" placeholder="40" data-oid="28e6af8ad9" />
            </div>
            <div className="ds-field" data-oid="4a7a331d2a">
              <label htmlFor="my-budget" className="ds-field-label" data-oid="a19bca4bf8">Total budget (₹)</label>
              <input id="my-budget" type="number" min={0} step={1000} className="ds-input" placeholder="4,50,000" data-oid="234234ad51" />
            </div>
            <div className="flex flex-col gap-ds-sm sm:col-span-2 sm:flex-row sm:items-center sm:justify-between" data-oid="85714fcf8f">
              <p className="flex items-center gap-ds-xs text-caption text-muted-foreground" data-oid="1d332746bb"><CalendarDays className="h-4 w-4" data-oid="8edfa414c0" />Demo form — nothing is sent.</p>
              <button type="submit" className="ds-button ds-button-primary" data-oid="0d70dae96c">Send request (demo)</button>
            </div>
            {sent && (
              <p role="status" className="rounded-lg bg-success/10 p-ds-md text-label text-success sm:col-span-2" data-oid="4227e6804a" data-oid-text-editable="false" data-oid-text-source="text|expression:27e7700fdaa1|text">
                Demo request {sent} saved. Nothing was sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
