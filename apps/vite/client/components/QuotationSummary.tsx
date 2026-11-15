import { useState } from "react"
import { AlertTriangle, Info } from "lucide-react"
import { buildQuote, inr, type Trip } from "../lib/yatra"

export function QuotationSummary({ trip }: { trip: Trip }) {
  const q = buildQuote(trip)
  const [requested, setRequested] = useState(false)
  const accessibleMismatch = trip.wheelchair && !q.t.wheelchair

  return (
    <aside id="quote" className="scroll-mt-20 rounded-xl border border-border bg-card p-ds-lg shadow-lg lg:sticky lg:top-24" data-oid="0a19db485f" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true" data-oid-text-editable="false" data-oid-text-source="element:div|element:p|element:dl|expression:3b1f2d4d8457|element:p|element:button|expression:6409e677ecaa|expression:31800759963d">
      <div className="flex items-center justify-between gap-ds-sm" data-oid="6481add6a1">
        <h2 className="text-heading font-bold text-foreground" data-oid="aaabf9c084">Estimate</h2>
        <span className="rounded-full bg-warning/20 px-ds-sm py-ds-xs text-caption font-medium text-foreground" data-oid="5a0717ab8b">Estimate · requires verification</span>
      </div>
      <p className="mt-ds-xs text-label text-muted-foreground" data-oid="14c2af57e1" data-oid-text-editable="false" data-oid-text-source="expression:8428276ad1b1|text|expression:58fc1ab213a2|text|expression:c9f27971a52a|text">
        {q.pax} travellers · {q.days} days · {q.nights} nights
      </p>

      <dl className="mt-ds-lg space-y-ds-md text-label" data-oid="87531236f0" data-oid-text-editable="false" data-oid-text-source="element:div|element:div|expression:bd0da6c7b920|expression:b56956c8a5da|element:div|element:div|element:div|element:div">
        <div className="flex justify-between gap-ds-md" data-oid="fbdbf00779">
          <dt className="text-foreground" data-oid="2f3b19c0a3">
            Transport
            <span className="block text-caption text-muted-foreground" data-oid="6f02f7b647" data-oid-text-editable="false" data-oid-text-source="expression:34682b45b4f0|text|expression:7b2ba0ec8066|text|expression:58fc1ab213a2|text">{q.vehicles} × {q.t.label}, {q.days} days</span>
          </dt>
          <dd className="font-semibold tabular-nums" data-oid="fc6c04e49f">{inr(q.transport)}</dd>
        </div>
        <div className="flex justify-between gap-ds-md" data-oid="50674e53bf">
          <dt className="text-foreground" data-oid="d231500f95">
            Accommodation
            <span className="block text-caption text-muted-foreground" data-oid="6c79fcee0f" data-oid-text-editable="false" data-oid-text-source="expression:0b1b44090cf4|text|expression:c9f27971a52a|text|expression:3411db3a90cc">{q.rooms} rooms × {q.nights} nights, {q.h.label.toLowerCase()}</span>
          </dt>
          <dd className="font-semibold tabular-nums" data-oid="326a1c667a">{inr(q.stay)}</dd>
        </div>
        {q.addOnLines.map((l, index) => (
          <div key={l.id} data-index={index} className="flex justify-between gap-ds-md" data-oid="d827daa0ea" data-oid-shared="true" data-oid-instance-targetable="true">
            <dt className="text-foreground" data-oid="0d32d8b181" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:fbb25588df27|element:span">
              {l.label}
              <span className="block text-caption text-muted-foreground" data-oid="713c0673f5" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:c8fb592996db|text|expression:9d39f139dc6b">{l.basis === "person-day" ? `${q.pax} people` : l.basis === "trip" ? "Whole trip" : `Qty ${l.qty}`} · {l.unit}</span>
            </dt>
            <dd className="font-semibold tabular-nums" data-oid="62d12bfb13" data-oid-shared="true" data-oid-instance-targetable="true">{inr(l.amount)}</dd>
          </div>
        ))}
        {q.addOnLines.length === 0 && <p className="text-caption text-muted-foreground" data-oid="bf926a4e96">No add-ons selected.</p>}
        <div className="flex justify-between gap-ds-md border-t border-border pt-ds-md" data-oid="04c9fb1622">
          <dt className="text-muted-foreground" data-oid="c5fbd23025">Subtotal</dt>
          <dd className="tabular-nums" data-oid="6f15e89e7a">{inr(q.transport + q.stay + q.addOnTotal)}</dd>
        </div>
        <div className="flex justify-between gap-ds-md" data-oid="61972084fc">
          <dt className="text-muted-foreground" data-oid="ec9166af71">
            Estimated GST
            <span className="block text-caption" data-oid="89fff0a51a">5% transport · 12% stay · 18% services</span>
          </dt>
          <dd className="tabular-nums" data-oid="b779c5b32d">{inr(q.tax)}</dd>
        </div>
        <div className="flex items-end justify-between gap-ds-md border-t border-border pt-ds-md" data-oid="7b3e9ee525">
          <dt className="text-body font-semibold text-foreground" data-oid="38e89603a7">Estimated total</dt>
          <dd className="text-[32px] font-extrabold leading-none tracking-tight text-primary tabular-nums" data-oid="bea053882e">{inr(q.total)}</dd>
        </div>
        <div className="flex justify-between gap-ds-md text-caption text-muted-foreground" data-oid="fd09e0a759">
          <dt data-oid="8707db97ea">Per traveller · indicative 25% advance</dt>
          <dd className="tabular-nums" data-oid="403b399729" data-oid-text-editable="false" data-oid-text-source="expression:14a4af32be26|text|expression:0edee117c833">{inr(q.perPerson)} · {inr(q.advance)}</dd>
        </div>
      </dl>

      {accessibleMismatch && (
        <p className="mt-ds-lg flex items-start gap-ds-sm rounded-lg bg-warning/15 p-ds-md text-caption text-foreground" data-oid="de8c0c00d1">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" data-oid="f3e2f59d7f" />
          Vehicle has no wheelchair ramp.
        </p>
      )}

      <p className="mt-ds-lg flex items-start gap-ds-sm rounded-lg bg-muted p-ds-md text-caption text-muted-foreground" data-oid="21aeaa2b0f">
        <Info className="mt-0.5 h-4 w-4 shrink-0" data-oid="121b6ca346" />
        Final prices are confirmed by vendors. No hidden fees.
      </p>

      <button type="button" onClick={() => setRequested(true)} disabled={trip.destinationIds.length === 0} className="ds-button ds-button-primary mt-ds-lg w-full" data-oid="fc94920331">
        Request confirmation (demo)
      </button>
      {trip.destinationIds.length === 0 && (
        <p className="mt-ds-sm text-center text-caption text-muted-foreground" data-oid="f5637a7443">Add a temple first.</p>
      )}
      {requested && (
        <p role="status" className="mt-ds-sm text-caption text-success" data-oid="6a9cbd9a01">
          Demo only — nothing was booked or paid.
        </p>
      )}
    </aside>
  )
}
