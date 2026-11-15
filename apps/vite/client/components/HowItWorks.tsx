import { ArrowRight, Check } from "lucide-react"

export function HowItWorks({ stopCount }: { stopCount: number }) {
  const hasStops = stopCount > 0

  return (
    <section aria-labelledby="how-title" className="border-t border-border bg-background" data-oid="a2cf08b2f3" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-2xl" data-oid="c6fdb215c1">
        <div className="grid items-center gap-ds-xl rounded-xl border border-border bg-card p-ds-xl shadow-sm lg:grid-cols-12" data-oid="2383929076">
          <div className="lg:col-span-3" data-oid="bd628945ca">
            <h2 id="how-title" className="text-heading font-bold tracking-tight text-foreground" data-oid="7ddb8261c0">Plan your Yatra</h2>
            <p className="mt-ds-xs text-label text-muted-foreground" data-oid="8eea686953">Four steps. Saves as you go.</p>
          </div>

          <ol className="grid gap-ds-md sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4 lg:gap-0" data-oid="98eb756f41">
            <li className="relative" data-oid="e93aded034">
              <a href="#discover" data-done={hasStops} className="group flex items-center gap-ds-md rounded-lg p-ds-sm hover:bg-muted lg:flex-col lg:items-start lg:gap-ds-sm" data-oid="fd7673263d">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-label font-bold text-primary-foreground" data-oid="5e63a24f4d">
                  {hasStops ? <Check className="h-5 w-5" data-oid="e0de7029d0" /> : "1"}
                </span>
                <span className="flex flex-col" data-oid="54d66fdf80">
                  <span className="text-body font-bold text-foreground group-hover:text-primary" data-oid="9170604b3c">Pick temples</span>
                  <span className="text-caption text-muted-foreground" data-oid="fabe11eb62">{hasStops ? `${stopCount} selected` : "Choose stops"}</span>
                </span>
              </a>
              <span className="pointer-events-none absolute left-[60px] right-ds-md top-[28px] hidden h-0.5 bg-border lg:block" data-oid="747afcc60d" />
            </li>
            <li className="relative" data-oid="bc2a594b17">
              <a href="#builder" className="group flex items-center gap-ds-md rounded-lg p-ds-sm hover:bg-muted lg:flex-col lg:items-start lg:gap-ds-sm" data-oid="806245c889">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-label font-bold text-primary" data-oid="c06fc2509c">2</span>
                <span className="flex flex-col" data-oid="642699650c">
                  <span className="text-body font-bold text-foreground group-hover:text-primary" data-oid="2eddbc3c44">Dates & people</span>
                  <span className="text-caption text-muted-foreground" data-oid="66c0317d6c">Who, when, how long</span>
                </span>
              </a>
              <span className="pointer-events-none absolute left-[60px] right-ds-md top-[28px] hidden h-0.5 bg-border lg:block" data-oid="d6c1687f3c" />
            </li>
            <li className="relative" data-oid="8a9cd6ad08">
              <a href="#itinerary" className="group flex items-center gap-ds-md rounded-lg p-ds-sm hover:bg-muted lg:flex-col lg:items-start lg:gap-ds-sm" data-oid="e1f555afa7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-label font-bold text-primary" data-oid="6c6154cec8">3</span>
                <span className="flex flex-col" data-oid="f7cd84730a">
                  <span className="text-body font-bold text-foreground group-hover:text-primary" data-oid="92efc5b22b">Plan & price</span>
                  <span className="text-caption text-muted-foreground" data-oid="3446b340bb">Day by day, in ₹</span>
                </span>
              </a>
              <span className="pointer-events-none absolute left-[60px] right-ds-md top-[28px] hidden h-0.5 bg-border lg:block" data-oid="c0e46e9739" />
            </li>
            <li className="relative" data-oid="71ad17542e">
              <a href="#addons" className="group flex items-center gap-ds-md rounded-lg p-ds-sm hover:bg-muted lg:flex-col lg:items-start lg:gap-ds-sm" data-oid="a51b20397d">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-card text-label font-bold text-secondary" data-oid="8f10499a7e">4</span>
                <span className="flex flex-col" data-oid="099bf6218f">
                  <span className="flex items-center gap-ds-xs text-body font-bold text-foreground group-hover:text-primary" data-oid="6882763922">
                    Extra help
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" data-oid="e82618a309" />
                  </span>
                  <span className="text-caption text-muted-foreground" data-oid="7772a9eeb0">Optional</span>
                </span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
