import { Accessibility, BadgeCheck, Car, ConciergeBell, HandHeart, Soup, UserRound } from "lucide-react"
import type { TripApi } from "../lib/useTrip"
import { inr, type AddOnId } from "../lib/yatra"

function Stepper({ id, label, api }: { id: AddOnId; label: string; api: TripApi }) {
  const v = api.trip.addOns[id]
  return (
    <div className="flex items-center gap-ds-sm" data-oid="38bea05187" data-oid-instance-targetable="true" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
      <button type="button" aria-label={`Remove one ${label}`} onClick={() => api.setAddOn(id, v - 1)} className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:border-primary" data-oid="b848ac59d3" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">−</button>
      <output className="w-6 text-center text-body font-semibold" data-oid="6d9a348221" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">{v}</output>
      <button type="button" aria-label={`Add one ${label}`} onClick={() => api.setAddOn(id, v + 1)} className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:border-primary" data-oid="6f473cd349" data-oid-instance-targetable="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">+</button>
    </div>
  )
}

function Toggle({ id, label, api }: { id: AddOnId; label: string; api: TripApi }) {
  const on = api.trip.addOns[id] > 0
  return (
    <button type="button" aria-pressed={on} aria-label={`${on ? "Remove" : "Add"} ${label}`} onClick={() => api.setAddOn(id, on ? 0 : 1)} className="ds-button ds-button-secondary aria-pressed:bg-primary aria-pressed:text-primary-foreground" data-oid="37c237690a" data-oid-instance-targetable="true" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-editable="true">
      {on ? "Added" : "Add"}
    </button>
  )
}

export function AddOnMarketplace({ api }: { api: TripApi }) {
  const needsChair = api.trip.wheelchair && api.trip.addOns.wheelchair === 0
  return (
    <section id="addons" className="scroll-mt-20 bg-primary text-primary-foreground" data-oid="639a2b0be2" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="mx-auto max-w-7xl px-ds-lg py-ds-3xl" data-oid="d775ed7a91">
        <div className="grid gap-ds-xl lg:grid-cols-12" data-oid="bf43d355ed">
          <div className="lg:col-span-4" data-oid="ebc6a311ba" data-oid-text-editable="false" data-oid-text-source="element:p|element:h2|element:p|expression:9e112711db20">
            <p className="text-label font-semibold uppercase text-secondary" data-oid="da93016e1e">Add-on marketplace</p>
            <h2 className="mt-ds-sm text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]" data-oid="1b0453d598">Help on the ground, from verified local providers</h2>
            <p className="mt-ds-md text-body opacity-80" data-oid="a597f1724b">Every add-on is fulfilled by a KYC-verified vendor and appears as its own line in your estimate.</p>
            {needsChair && (
              <p className="mt-ds-lg rounded-lg bg-secondary p-ds-md text-label text-secondary-foreground" data-oid="81a37d2ae0">You’ve requested wheelchair assistance — consider adding a wheelchair rental or attendant.</p>
            )}
          </div>

          <div className="grid gap-ds-md sm:grid-cols-2 lg:col-span-8" data-oid="0ecc1d25d3">
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="8b07e5719e">
              <UserRound className="h-6 w-6 text-primary" data-oid="3d09e1176d" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="30f1bd84f6">Licensed local guide</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="38390d32c5">Explains history and temple customs in Tamil, Telugu, Kannada, Malayalam or English.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="616052cd86">
                <p className="text-label font-semibold" data-oid="e6e89b83c6" data-oid-text-editable="false" data-oid-text-source="expression:00578a5cf85f|element:span">{inr(1500)} <span className="font-normal text-muted-foreground" data-oid="25372406a8">/ day</span></p>
                <Stepper id="guide" label="guide" api={api} />
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="1cfa02839d">
              <Accessibility className="h-6 w-6 text-primary" data-oid="891fb8dd51" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="a5e9de7445">Wheelchair rental</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="67c6468e31">Foldable chairs delivered to your hotel and loaded into your vehicle.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="8d59a2d942">
                <p className="text-label font-semibold" data-oid="aa589d1779" data-oid-text-editable="false" data-oid-text-source="expression:96a44e067e32|element:span">{inr(400)} <span className="font-normal text-muted-foreground" data-oid="14ae7aef5d">/ chair / day</span></p>
                <Stepper id="wheelchair" label="wheelchair" api={api} />
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="5d6d6294ef">
              <HandHeart className="h-6 w-6 text-primary" data-oid="7dff264ad6" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="3bec3ebbca">Trained attendant</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="cb20969d1b">Accompanies elders through queues, stairs and long corridors.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="9dcbf88a44">
                <p className="text-label font-semibold" data-oid="e4052772e3" data-oid-text-editable="false" data-oid-text-source="expression:01efbac7dc43|element:span">{inr(1800)} <span className="font-normal text-muted-foreground" data-oid="f7b5e26209">/ day</span></p>
                <Stepper id="attendant" label="attendant" api={api} />
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="9963375488">
              <Soup className="h-6 w-6 text-primary" data-oid="4161d40d7a" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="3c6e15e111">Vegetarian meal plan</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="87cc1de7bc">Breakfast, lunch and dinner from FSSAI-registered kitchens along the route.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="ea7c15753e">
                <p className="text-label font-semibold" data-oid="de90b4d775" data-oid-text-editable="false" data-oid-text-source="expression:cb930af61ad1|element:span">{inr(450)} <span className="font-normal text-muted-foreground" data-oid="608ddce699">/ person / day</span></p>
                <Toggle id="meals" label="meal plan" api={api} />
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="acc2e478cd">
              <Car className="h-6 w-6 text-primary" data-oid="b55543f9ee" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="9d545f082a">Station / airport transfer</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="e2f7b341b9">Pickup from Tirupati, Madurai or Chennai with luggage assistance.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="e0cc45200c">
                <p className="text-label font-semibold" data-oid="ba8a7ae444" data-oid-text-editable="false" data-oid-text-source="expression:826448527e65|element:span">{inr(1200)} <span className="font-normal text-muted-foreground" data-oid="6e55ff7d01">/ transfer</span></p>
                <Stepper id="transfer" label="transfer" api={api} />
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-ds-lg text-card-foreground" data-oid="40f43a7b8c">
              <ConciergeBell className="h-6 w-6 text-primary" data-oid="7e79c5309e" />
              <h3 className="mt-ds-md text-lg font-bold" data-oid="38941de069">Yatra concierge</h3>
              <p className="mt-ds-xs flex-1 text-label text-muted-foreground" data-oid="74d835d289">A named coordinator by phone for changes, delays and family updates.</p>
              <div className="mt-ds-md flex items-center justify-between" data-oid="5ede0c9e98">
                <p className="text-label font-semibold" data-oid="3fc9741ffc" data-oid-text-editable="false" data-oid-text-source="expression:64fd6f107bb0|element:span">{inr(2500)} <span className="font-normal text-muted-foreground" data-oid="dab62dfe17">/ trip</span></p>
                <Toggle id="concierge" label="concierge" api={api} />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-ds-xl flex items-center gap-ds-sm text-caption opacity-80" data-oid="9b8777aab0">
          <BadgeCheck className="h-4 w-4" data-oid="b946658be6" />
          We list only authorized services. YatraOne does not sell VIP darshan or special temple access.
        </p>
      </div>
    </section>
  )
}
