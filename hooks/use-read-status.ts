import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ReadStatusState {
  readItems: Record<string, boolean>
  markAsRead: (id: string) => void
  isRead: (id: string) => boolean
}

export const useReadStatusStore = create<ReadStatusState>()(
  persist(
    (set, get) => ({
      readItems: {},
      markAsRead: (id) =>
        set((state) => ({
          readItems: { ...state.readItems, [id]: true },
        })),
      isRead: (id) => !!get().readItems[id],
    }),
    {
      name: 'read-status-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
)

// Custom hook for easy consumption
export const useReadStatus = () => {
  const { markAsRead, isRead, readItems } = useReadStatusStore()
  return { markAsRead, isRead, readItems }
} 