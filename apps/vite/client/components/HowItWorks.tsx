import { CalendarDays, ClipboardCheck, MapPin, Receipt } from "lucide-react"

export function HowItWorks({ stopCount }: { stopCount: number }) {
  return (
    <section aria-labelledby="how-title" className="border-t border-border bg-background" data-oid="0c3ab49024" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-xl" data-oid="a751953a8e">
        <div className="flex flex-col gap-ds-xs md:flex-row md:items-baseline md:justify-between" data-oid="dfbbdf8737">
          <h2 id="how-title" className="text-xl font-bold tracking-tight text-foreground" data-oid="19556f205a">Plan your Yatra in 4 simple steps</h2>
          <p className="text-label text-muted-foreground" data-oid="0209b982fe">Nothing is booked until you confirm. Your plan saves automatically.</p>
        </div>
        <ol className="mt-ds-lg grid gap-ds-md md:grid-cols-2 xl:grid-cols-4" data-oid="bca9d99764">
          <li data-oid="5c15f9b2bc">
            <a href="#discover" className="group flex h-full items-start gap-ds-md rounded-xl border border-border bg-card p-ds-lg transition-colors hover:border-primary" data-oid="95a7b04996">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-label font-bold text-primary-foreground" data-oid="f8c50c92b5">1</span>
              <span className="flex flex-col gap-ds-xs" data-oid="36413e6e50">
                <span className="flex items-center gap-ds-sm text-body font-bold text-foreground group-hover:text-primary" data-oid="83a1bb2062">
                  <MapPin className="h-4 w-4" data-oid="29e5eb6903" />
                  Pick temples
                </span>
                <span className="text-label text-muted-foreground" data-oid="52a3af28f5">{stopCount > 0 ? `${stopCount} stop${stopCount === 1 ? "" : "s"} chosen — add or remove any time` : "Tap “Add to trip” on the places you want to visit"}</span>
              </span>
            </a>
          </li>
          <li data-oid="889d99b654">
            <a href="#builder" className="group flex h-full items-start gap-ds-md rounded-xl border border-border bg-card p-ds-lg transition-colors hover:border-primary" data-oid="bd819afcf2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-label font-bold text-primary-foreground" data-oid="747afcc60d">2</span>
              <span className="flex flex-col gap-ds-xs" data-oid="adf07db257">
                <span className="flex items-center gap-ds-sm text-body font-bold text-foreground group-hover:text-primary" data-oid="30554b031b">
                  <CalendarDays className="h-4 w-4" data-oid="ed9b4b4f27" />
                  Set dates & travellers
                </span>
                <span className="text-label text-muted-foreground" data-oid="bcf70168de">Choose where you start, how many days and who is coming</span>
              </span>
            </a>
          </li>
          <li data-oid="5a601cc837">
            <a href="#itinerary" className="group flex h-full items-start gap-ds-md rounded-xl border border-border bg-card p-ds-lg transition-colors hover:border-primary" data-oid="cc337a0e9b">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-label font-bold text-primary-foreground" data-oid="721e73d135">3</span>
              <span className="flex flex-col gap-ds-xs" data-oid="e1f555afa7">
                <span className="flex items-center gap-ds-sm text-body font-bold text-foreground group-hover:text-primary" data-oid="6c6154cec8">
                  <Receipt className="h-4 w-4" data-oid="2cbc90031d" />
                  Check plan & price
                </span>
                <span className="text-label text-muted-foreground" data-oid="71b99bf0c1">See a day-by-day plan and an itemised estimate in ₹</span>
              </span>
            </a>
          </li>
          <li data-oid="fff9811e16">
            <a href="#addons" className="group flex h-full items-start gap-ds-md rounded-xl border border-border bg-card p-ds-lg transition-colors hover:border-secondary" data-oid="14400c4f8c">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-label font-bold text-secondary-foreground" data-oid="cfaf80bc8b">4</span>
              <span className="flex flex-col gap-ds-xs" data-oid="fc52ca4b66">
                <span className="flex items-center gap-ds-sm text-body font-bold text-foreground group-hover:text-primary" data-oid="bc2746e4d2">
                  <ClipboardCheck className="h-4 w-4" data-oid="55241e2768" />
                  Add help, then request
                </span>
                <span className="text-label text-muted-foreground" data-oid="15729c0f5e">Optional guides, wheelchairs or meals — then ask vendors to confirm</span>
              </span>
            </a>
          </li>
        </ol>
      </div>
    </section>
  )
}
