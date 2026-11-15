import { useMemo, useState } from "react"
import { AddOnMarketplace } from "../components/AddOnMarketplace"
import { DiscoverySection } from "../components/DiscoverySection"
import { HeroSection } from "../components/HeroSection"
import { HowItWorks } from "../components/HowItWorks"
import { TripTray } from "../components/TripTray"
import { ItineraryPreview } from "../components/ItineraryPreview"
import { PackagesSection } from "../components/PackagesSection"
import { QuotationSummary } from "../components/QuotationSummary"
import { SiteFooter } from "../components/SiteFooter"
import { TrustSection } from "../components/TrustSection"
import { SiteHeader } from "../components/SiteHeader"
import { TripBuilder } from "../components/TripBuilder"
import { useTrip } from "../lib/useTrip"
import { buildItinerary } from "../lib/yatra"

export default function Index() {
  const api = useTrip()
  const [query, setQuery] = useState("")
  const days = useMemo(() => buildItinerary(api.trip), [api.trip])

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground" data-oid="edbc040ca8" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <SiteHeader stopCount={api.trip.destinationIds.length} />
      <HeroSection trip={api.trip} onSearch={setQuery} />
      <HowItWorks stopCount={api.trip.destinationIds.length} />
      <DiscoverySection query={query} setQuery={setQuery} selected={api.trip.destinationIds} onToggle={api.toggleDestination} />
      <TripBuilder api={api} />
      <section className="border-t border-border bg-muted/40" data-oid="fd810209d4">
        <div className="mx-auto grid max-w-7xl gap-ds-xl px-ds-lg py-ds-3xl lg:grid-cols-12" data-oid="0ec5a336c8">
          <div className="lg:col-span-7" data-oid="ef38e342ff">
            <ItineraryPreview days={days} trip={api.trip} />
          </div>
          <div className="lg:col-span-5" data-oid="839eb34112">
            <QuotationSummary trip={api.trip} />
          </div>
        </div>
      </section>
      <AddOnMarketplace api={api} />
      <PackagesSection onLoad={api.update} />
      <TrustSection />
      <SiteFooter />
      <TripTray api={api} />
    </main>
  )
}
