import { HeartHandshake, ReceiptText, ShieldCheck, Users } from "lucide-react"
import { assetPath } from "../lib/assetPath"

export function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-20 border-t border-border bg-card" data-oid="c443e49ed4" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto grid max-w-7xl items-center gap-ds-2xl px-ds-lg py-ds-3xl lg:grid-cols-12" data-oid="dba29d136e">
        <div className="relative lg:col-span-5" data-oid="081e1806da">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted" data-oid="7240b87fe8">
            <img src={assetPath("mercury-stock/adobe-stock-629462746-75ab59c65220.jpg")} alt="Adult son walking with his elderly parents" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.hidden = true }} data-oid="0be3d9af01" />
          </div>
          <div className="absolute -bottom-ds-lg right-ds-md max-w-[240px] rounded-xl bg-primary p-ds-lg text-primary-foreground shadow-xl lg:-right-ds-xl" data-oid="2b7edbb1c8">
            <p className="text-[32px] font-extrabold leading-none" data-oid="b994c4d666">Parents’ Yatra</p>
            <p className="mt-ds-sm text-label opacity-90" data-oid="8d5a78cd64">Plan and pay for your parents’ pilgrimage, with consent-based trip updates.</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-ds-2xl" data-oid="f460c9bd59">
          <p className="text-label font-semibold uppercase text-secondary" data-oid="29daf530a4">Why families trust YatraOne</p>
          <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground" data-oid="ad72c51c09">Calm planning. Honest prices. People who show up.</h2>
          <div className="mt-ds-xl grid gap-ds-lg sm:grid-cols-2" data-oid="7978bd91c1">
            <div className="border-t-2 border-primary pt-ds-md" data-oid="f4ddb503bd">
              <ShieldCheck className="h-6 w-6 text-primary" data-oid="e14074d7d6" />
              <h3 className="mt-ds-sm text-lg font-bold" data-oid="7269c17059">Verified vendors</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="1e31000869">Hotels, drivers, guides and attendants pass identity, licence and permit checks before they’re listed.</p>
            </div>
            <div className="border-t-2 border-primary pt-ds-md" data-oid="0be588e86f">
              <ReceiptText className="h-6 w-6 text-primary" data-oid="b649d1fa69" />
              <h3 className="mt-ds-sm text-lg font-bold" data-oid="226a9c71ac">Transparent pricing</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="7ffeadeba1">Every service is itemized with taxes and cancellation terms. Estimates stay estimates until vendors confirm.</p>
            </div>
            <div className="border-t-2 border-secondary pt-ds-md" data-oid="7edb66a377">
              <HeartHandshake className="h-6 w-6 text-secondary" data-oid="8394019115" />
              <h3 className="mt-ds-sm text-lg font-bold" data-oid="72ec0ab50e">Senior-friendly by default</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="5bf5b71c47">Walking effort, lifts, rest stops and wheelchair needs follow your trip — never silently swapped.</p>
            </div>
            <div className="border-t-2 border-secondary pt-ds-md" data-oid="21df2eb072">
              <Users className="h-6 w-6 text-secondary" data-oid="ec6fd8b90f" />
              <h3 className="mt-ds-sm text-lg font-bold" data-oid="7d7537ded7">Made for families & groups</h3>
              <p className="mt-ds-xs text-label text-muted-foreground" data-oid="7525ac1c4b">Share itineraries, split rooms and vehicles sensibly, and plan group trips of up to 40+ travellers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
