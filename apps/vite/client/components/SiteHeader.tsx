import { Route } from "lucide-react"

export function SiteHeader({ stopCount }: { stopCount: number }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur" data-oid="0a0e600e51" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-ds-md px-ds-lg py-ds-md" data-oid="0c99ce5364">
        <a href="#top" className="flex items-center gap-ds-sm text-xl font-extrabold tracking-tight text-primary" data-oid="fe21e8e4cf">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground" data-oid="d6c0b0b504">
            <Route className="h-5 w-5" data-oid="b45cea78df" />
          </span>
          YatraOne
        </a>
        <nav className="hidden items-center gap-ds-lg lg:flex" aria-label="Sections" data-oid="4ba2866b24">
          <a href="#discover" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="e6b5805093">1. Pick temples</a>
          <a href="#builder" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="729683fa50">2. Dates & travellers</a>
          <a href="#itinerary" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="ce63248c5c">3. Plan & price</a>
          <a href="#addons" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="4872d9f5ff">4. Extra help</a>
          <a href="#packages" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="22543848a6">Packages</a>
          <a href="#trust" className="text-label font-semibold text-muted-foreground hover:text-primary" data-oid="e39c2a137c">Why us</a>
        </nav>
        <a href="#builder" className="ds-button ds-button-primary" data-oid="1eb507b5b4">
          My trip
          <span className="ml-ds-xs rounded-full bg-primary-foreground px-ds-sm text-caption font-semibold text-primary" data-oid="f6b9453887">{stopCount}</span>
        </a>
      </div>
    </header>
  )
}
