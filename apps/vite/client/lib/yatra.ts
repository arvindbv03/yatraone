export type Category = "Temple" | "Heritage site" | "Coastal pilgrimage"

export type Destination = {
  id: string
  name: string
  town: string
  state: "Andhra Pradesh" | "Tamil Nadu" | "Karnataka" | "Kerala"
  category: Category
  deity: string
  circuit: string
  description: string
  visitHours: number
  walking: "Low" | "Moderate" | "High"
  lat: number
  lng: number
}

export const DESTINATIONS: Destination[] = [
  { id: "tirumala", name: "Sri Venkateswara Temple", town: "Tirumala, Tirupati", state: "Andhra Pradesh", category: "Temple", deity: "Venkateswara (Vishnu)", circuit: "Tirupati circuit", description: "Hilltop shrine in the Seshachalam hills, reached by ghat road or the Alipiri footpath.", visitHours: 4, walking: "High", lat: 13.6833, lng: 79.3474 },
  { id: "srikalahasti", name: "Srikalahasteeswara Temple", town: "Srikalahasti", state: "Andhra Pradesh", category: "Temple", deity: "Shiva (Vayu linga)", circuit: "Tirupati circuit", description: "Riverside Shiva temple on the Swarnamukhi, one of the Pancha Bhoota sthalams.", visitHours: 2, walking: "Moderate", lat: 13.7496, lng: 79.6984 },
  { id: "kanipakam", name: "Varasiddhi Vinayaka Temple", town: "Kanipakam", state: "Andhra Pradesh", category: "Temple", deity: "Ganesha", circuit: "Tirupati circuit", description: "11th-century Chola-era temple near Chittoor, known for its self-manifested idol.", visitHours: 1.5, walking: "Low", lat: 13.2808, lng: 79.0383 },
  { id: "madurai", name: "Meenakshi Amman Temple", town: "Madurai", state: "Tamil Nadu", category: "Temple", deity: "Meenakshi & Sundareswarar", circuit: "Rameswaram circuit", description: "Sprawling temple complex with fourteen gopurams at the heart of old Madurai.", visitHours: 3, walking: "Moderate", lat: 9.9195, lng: 78.1193 },
  { id: "rameswaram", name: "Ramanathaswamy Temple", town: "Rameswaram", state: "Tamil Nadu", category: "Temple", deity: "Shiva (Jyotirlinga)", circuit: "Rameswaram circuit", description: "Island temple famed for its long pillared corridors and sacred theerthams.", visitHours: 3, walking: "High", lat: 9.2881, lng: 79.3174 },
  { id: "dhanushkodi", name: "Dhanushkodi", town: "Dhanushkodi", state: "Tamil Nadu", category: "Coastal pilgrimage", deity: "Associated with Rama", circuit: "Rameswaram circuit", description: "Tip of Pamban island where the Bay of Bengal meets the Indian Ocean.", visitHours: 2, walking: "Moderate", lat: 9.152, lng: 79.444 },
  { id: "kanchipuram", name: "Kanchi Kamakshi Amman Temple", town: "Kanchipuram", state: "Tamil Nadu", category: "Temple", deity: "Kamakshi (Devi)", circuit: "Tamil Nadu heritage circuit", description: "Principal Devi temple of the temple city of Kanchipuram, also known for silk weaving.", visitHours: 2, walking: "Low", lat: 12.8406, lng: 79.7036 },
  { id: "chidambaram", name: "Thillai Nataraja Temple", town: "Chidambaram", state: "Tamil Nadu", category: "Temple", deity: "Nataraja (Shiva)", circuit: "Tamil Nadu heritage circuit", description: "Temple dedicated to Shiva as the cosmic dancer, with gold-roofed sanctum halls.", visitHours: 2.5, walking: "Moderate", lat: 11.3993, lng: 79.6935 },
  { id: "thanjavur", name: "Brihadeeswarar Temple", town: "Thanjavur", state: "Tamil Nadu", category: "Heritage site", deity: "Shiva", circuit: "Tamil Nadu heritage circuit", description: "UNESCO-listed Chola masterpiece completed in 1010 CE, with a towering granite vimana.", visitHours: 2, walking: "Low", lat: 10.7828, lng: 79.1318 },
  { id: "srirangam", name: "Ranganathaswamy Temple", town: "Srirangam, Tiruchirappalli", state: "Tamil Nadu", category: "Temple", deity: "Ranganatha (Vishnu)", circuit: "Tamil Nadu heritage circuit", description: "Island temple town on the Kaveri with seven concentric enclosures.", visitHours: 3, walking: "High", lat: 10.8624, lng: 78.6896 },
  { id: "udupi", name: "Udupi Sri Krishna Matha", town: "Udupi", state: "Karnataka", category: "Temple", deity: "Krishna", circuit: "Coastal Karnataka", description: "Matha founded by Madhvacharya, known for its Kanakana Kindi window and temple meals.", visitHours: 1.5, walking: "Low", lat: 13.3409, lng: 74.7421 },
  { id: "mysuru", name: "Chamundeshwari Temple", town: "Chamundi Hills, Mysuru", state: "Karnataka", category: "Temple", deity: "Chamundeshwari (Devi)", circuit: "Mysuru day trip", description: "Hilltop temple overlooking Mysuru, accessible by road or a 1,000-step stairway.", visitHours: 1.5, walking: "Moderate", lat: 12.2724, lng: 76.671 },
  { id: "guruvayur", name: "Guruvayur Sri Krishna Temple", town: "Guruvayur", state: "Kerala", category: "Temple", deity: "Guruvayurappan (Krishna)", circuit: "Kerala temples", description: "Kerala's most visited Krishna temple; traditional dress code applies inside.", visitHours: 2, walking: "Low", lat: 10.5946, lng: 76.041 },
]

export const ORIGINS: Record<string, { lat: number; lng: number }> = {
  Bengaluru: { lat: 12.9716, lng: 77.5946 },
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Hyderabad: { lat: 17.385, lng: 78.4867 },
  Madurai: { lat: 9.9252, lng: 78.1198 },
  Kochi: { lat: 9.9312, lng: 76.2673 },
  Coimbatore: { lat: 11.0168, lng: 76.9558 },
}

export type TransportId = "sedan" | "suv" | "accessible" | "tempo" | "coach"

export const TRANSPORT: { id: TransportId; label: string; seats: number; perDay: number; wheelchair: boolean }[] = [
  { id: "sedan", label: "AC sedan", seats: 4, perDay: 3200, wheelchair: false },
  { id: "suv", label: "AC SUV (Innova class)", seats: 6, perDay: 4500, wheelchair: false },
  { id: "accessible", label: "Wheelchair-accessible van with ramp", seats: 6, perDay: 6200, wheelchair: true },
  { id: "tempo", label: "AC Tempo Traveller", seats: 12, perDay: 6800, wheelchair: false },
  { id: "coach", label: "AC mini coach", seats: 24, perDay: 11000, wheelchair: false },
]

export type HotelId = "budget" | "comfort" | "premium"

export const HOTELS: { id: HotelId; label: string; note: string; perRoomNight: number }[] = [
  { id: "budget", label: "Guesthouse / dharamshala", note: "Clean, basic rooms near the temple", perRoomNight: 1600 },
  { id: "comfort", label: "Comfort hotel", note: "AC rooms, lift access where listed", perRoomNight: 3200 },
  { id: "premium", label: "Premium hotel", note: "Larger rooms, in-house dining", perRoomNight: 6000 },
]

export type AddOnId = "guide" | "wheelchair" | "attendant" | "meals" | "transfer" | "concierge"

export const ADDONS: { id: AddOnId; label: string; unit: string; price: number; basis: "day" | "person-day" | "each" | "trip" }[] = [
  { id: "guide", label: "Licensed local guide", unit: "per day", price: 1500, basis: "day" },
  { id: "wheelchair", label: "Wheelchair rental", unit: "per chair, per day", price: 400, basis: "day" },
  { id: "attendant", label: "Trained attendant", unit: "per attendant, per day", price: 1800, basis: "day" },
  { id: "meals", label: "Vegetarian meal plan", unit: "per person, per day", price: 450, basis: "person-day" },
  { id: "transfer", label: "Station / airport transfer", unit: "per transfer", price: 1200, basis: "each" },
  { id: "concierge", label: "Yatra concierge", unit: "per trip", price: 2500, basis: "trip" },
]

export type Trip = {
  origin: string
  destinationIds: string[]
  startDate: string
  days: number
  adults: number
  children: number
  seniors: number
  wheelchair: boolean
  lift: boolean
  restStops: boolean
  transport: TransportId
  hotel: HotelId
  addOns: Record<AddOnId, number>
}

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Math.round(n))

export const byId = (id: string) => DESTINATIONS.find((d) => d.id === id)

function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLng = ((b.lng - a.lng) * Math.PI) / 180
  const h = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h)) * 1.3 // rough road factor
}

export type Leg = { kind: "travel"; from: string; to: string; km: number; hours: number } | { kind: "visit"; dest: Destination; hours: number } | { kind: "rest"; note: string }
export type Day = { day: number; date: string; legs: Leg[] }

export function buildItinerary(trip: Trip): Day[] {
  const stops = trip.destinationIds.map(byId).filter(Boolean) as Destination[]
  const speed = trip.restStops ? 38 : 45
  const days: Day[] = []
  const start = trip.startDate ? new Date(trip.startDate) : null
  const n = Math.max(1, trip.days)
  for (let i = 0; i < n; i++) {
    const d = start ? new Date(start.getTime() + i * 86400000) : null
    days.push({ day: i + 1, date: d ? d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) : `Day ${i + 1}`, legs: [] })
  }
  const origin = ORIGINS[trip.origin] ?? ORIGINS.Bengaluru
  let prev = { name: trip.origin, ...origin }
  stops.forEach((s, k) => {
    const di = Math.min(n - 1, Math.floor((k * n) / Math.max(stops.length, 1)))
    const dist = km(prev, s)
    if (dist > 3) days[di].legs.push({ kind: "travel", from: prev.name, to: s.town, km: dist, hours: dist / speed })
    days[di].legs.push({ kind: "visit", dest: s, hours: s.visitHours * (trip.seniors > 0 || trip.wheelchair ? 1.25 : 1) })
    prev = { name: s.town, lat: s.lat, lng: s.lng }
  })
  days.forEach((d) => {
    if (d.legs.length === 0) d.legs.push({ kind: "rest", note: "Buffer day for rest, local darshan queues or weather delays." })
  })
  if (stops.length) {
    const dist = km(prev, origin)
    days[n - 1].legs.push({ kind: "travel", from: prev.name, to: trip.origin, km: dist, hours: dist / speed })
  }
  return days
}

export function transportOption(id: TransportId) {
  return TRANSPORT.find((t) => t.id === id) ?? TRANSPORT[0]
}

export function buildQuote(trip: Trip) {
  const pax = trip.adults + trip.children + trip.seniors
  const days = Math.max(1, trip.days)
  const nights = Math.max(0, days - 1)
  const t = transportOption(trip.transport)
  const vehicles = Math.max(1, Math.ceil(pax / t.seats))
  const h = HOTELS.find((x) => x.id === trip.hotel) ?? HOTELS[1]
  const rooms = Math.max(1, Math.ceil(pax / 2))
  const transport = t.perDay * days * vehicles
  const stay = h.perRoomNight * rooms * nights
  const addOnLines = ADDONS.filter((a) => trip.addOns[a.id] > 0).map((a) => {
    const q = trip.addOns[a.id]
    const amount = a.basis === "day" ? a.price * q * days : a.basis === "person-day" ? a.price * pax * days : a.basis === "each" ? a.price * q : a.price
    return { ...a, qty: q, amount }
  })
  const addOnTotal = addOnLines.reduce((s, l) => s + l.amount, 0)
  const tax = transport * 0.05 + stay * 0.12 + addOnTotal * 0.18
  const total = transport + stay + addOnTotal + tax
  return { pax, days, nights, t, vehicles, h, rooms, transport, stay, addOnLines, addOnTotal, tax, total, advance: total * 0.25, perPerson: pax ? total / pax : 0 }
}

export const DEFAULT_TRIP: Trip = {
  origin: "Bengaluru",
  destinationIds: ["tirumala", "srikalahasti", "kanipakam"],
  startDate: "2027-01-10",
  days: 4,
  adults: 4,
  children: 0,
  seniors: 2,
  wheelchair: true,
  lift: true,
  restStops: true,
  transport: "accessible",
  hotel: "comfort",
  addOns: { guide: 1, wheelchair: 1, attendant: 0, meals: 0, transfer: 0, concierge: 0 },
}
