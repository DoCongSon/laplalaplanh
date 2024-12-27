import { ProductTagProps } from '@/components/product/product-tag'
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

type CartItem = {
  id: string
  image: string
  name: string
  price: number
  quantity: number
  note?: string
  salePrice?: number
  tags?: ProductTagProps['tag'][]
}

type WishlistItem = {
  id: string
  image: string
  name: string
  price: number
  salePrice?: number
  tags?: ProductTagProps['tag'][]
  cart?: boolean
}

export type State = {
  user: User | null
  cart: CartItem[]
  wishlist: WishlistItem[]
}

export type Actions = {
  setUser: (user: User) => void
  clearUser: () => void
  addToCart: (product: CartItem) => void
  removeFromCart: (id: string) => void
  updateItemCart: (newProduct: CartItem) => void
  addToWishlist: (product: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  updateItemWishlist: (newProduct: WishlistItem) => void
}

export type Store = State & Actions

export const defaultInitState: State = {
  user: null,
  cart: [],
  wishlist: [],
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
        updateItemCart: (newProduct) =>
          set((state) => ({
            cart: state.cart.map((product) => (product.id === newProduct.id ? newProduct : product)),
          })),
        addToWishlist: (product) => set((state) => ({ wishlist: [...state.wishlist, product] })),
        removeFromWishlist: (id) =>
          set((state) => ({ wishlist: state.wishlist.filter((product) => product.id !== id) })),
        updateItemWishlist: (newProduct) =>
          set((state) => ({
            wishlist: state.wishlist.map((product) => (product.id === newProduct.id ? newProduct : product)),
          })),
      }),
      { name: 'global-store' }
    )
  )
}
