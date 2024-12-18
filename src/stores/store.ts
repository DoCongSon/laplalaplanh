import { persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

type User = {
  name: string
  email: string
  phoneNumber: string
  childInfo: {
    name: string
    dob: string
  }[]
}

type Cart = {
  id: string
  name: string
  price: number
  quantity: number
}

export type State = {
  user: User | null
  cart: Cart[]
}

export type Actions = {
  setUser: (user: User) => void
  clearUser: () => void
  addToCart: (product: Cart) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

export type Store = State & Actions

export const defaultInitState: State = {
  user: null,
  cart: [],
}

export const createGlobalStore = (initState: State = defaultInitState) => {
  return createStore(
    persist<Store>(
      (set) => ({
        ...initState,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
        updateQuantity: (id, quantity) =>
          set((state) => ({
            cart: state.cart.map((product) => (product.id === id ? { ...product, quantity } : product)),
          })),
      }),
      { name: 'global-store' }
    )
  )
}
