'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type Store, createGlobalStore, defaultInitState } from '@/stores/store'

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(undefined)

export interface GlobalStoreProviderProps {
  children: ReactNode
}

export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
  const storeRef = useRef<GlobalStoreApi | undefined>(undefined)
  if (!storeRef.current) {
    storeRef.current = createGlobalStore(defaultInitState)
  }

  return <GlobalStoreContext.Provider value={storeRef.current}>{children}</GlobalStoreContext.Provider>
}

export const useGlobalStore = <T,>(selector: (store: Store) => T): T => {
  const globalStoreContext = useContext(GlobalStoreContext)

  if (!globalStoreContext) {
    throw new Error(`useGlobalStore must be used within GlobalStoreProvider`)
  }

  return useStore(globalStoreContext, selector)
}
