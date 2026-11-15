import { useCallback, useEffect, useState } from "react"
import { DEFAULT_TRIP, type AddOnId, type Trip } from "./yatra"

const KEY = "yatraone-draft"

export function useTrip() {
  const [trip, setTrip] = useState<Trip>(DEFAULT_TRIP)
  const [savedAt, setSavedAt] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as { trip: Trip; savedAt: string }
        setTrip({ ...DEFAULT_TRIP, ...parsed.trip, addOns: { ...DEFAULT_TRIP.addOns, ...parsed.trip.addOns } })
        setSavedAt(parsed.savedAt)
      }
    } catch {
      /* ignore corrupt draft */
    }
  }, [])

  const update = useCallback((patch: Partial<Trip>) => setTrip((t) => ({ ...t, ...patch })), [])

  const toggleDestination = useCallback((id: string) => {
    setTrip((t) => ({
      ...t,
      destinationIds: t.destinationIds.includes(id) ? t.destinationIds.filter((d) => d !== id) : [...t.destinationIds, id],
    }))
  }, [])

  const move = useCallback((index: number, dir: -1 | 1) => {
    setTrip((t) => {
      const next = [...t.destinationIds]
      const j = index + dir
      if (j < 0 || j >= next.length) return t
      ;[next[index], next[j]] = [next[j], next[index]]
      return { ...t, destinationIds: next }
    })
  }, [])

  const setAddOn = useCallback((id: AddOnId, qty: number) => {
    setTrip((t) => ({ ...t, addOns: { ...t.addOns, [id]: Math.max(0, Math.min(10, qty)) } }))
  }, [])

  const saveDraft = useCallback(() => {
    const at = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
    setTrip((t) => {
      localStorage.setItem(KEY, JSON.stringify({ trip: t, savedAt: at }))
      return t
    })
    setSavedAt(at)
  }, [])

  return { trip, update, toggleDestination, move, setAddOn, saveDraft, savedAt }
}

export type TripApi = ReturnType<typeof useTrip>
