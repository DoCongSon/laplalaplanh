import { Address } from '@/components/payment/location-picker'
import { Product } from '@/constants'
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

export type CartItem = Product & {
  cartId: string
  quantity: number
  natures?: {
    name: string
    value: string
  }[]
}

type WishlistItem = Product

export type AddressItem = {
  id: string
  type: 'Công ty' | 'Nhà riêng'
  name: string
  phone: string
  isDefault: boolean
  email: string
  address: Address
}

type PaymentItem = Product & {
  nature?: string
  quantity: number
}

export type State = {
  user: User | null
  cart: CartItem[]
  wishlist: WishlistItem[]
  addresses: AddressItem[]
  payments: PaymentItem[]
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
  addAddress: (address: AddressItem) => void
  removeAddress: (id: string) => void
  updateAddress: (newAddress: AddressItem) => void
  addPayment: (payments: PaymentItem[]) => void
  clearPayment: () => void
}

export type Store = State & Actions

export const defaultInitState: State = {
  user: null,
  cart: [],
  wishlist: [],
  addresses: [],
  payments: [],
}

export const createGlobalStore = (initState: State = defaultInitState) => {
  return createStore(
    persist<Store>(
      (set) => ({
        ...initState,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        addToCart: (product) =>
          set((state) => {
            const existingProduct = state.cart.find((item) => item.cartId === product.cartId)
            if (existingProduct) {
              return {
                cart: state.cart.map((item) =>
                  item.cartId === product.cartId
                    ? { ...item, quantity: item.quantity + product.quantity, natures: product.natures }
                    : item
                ),
              }
            }
            return { cart: [...state.cart, product] }
          }),
        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((product) => product.cartId !== id) })),
        updateItemCart: (newProduct) =>
          set((state) => ({
            cart: state.cart.map((product) => (product.cartId === newProduct.cartId ? newProduct : product)),
          })),
        addToWishlist: (product) => set((state) => ({ wishlist: [...state.wishlist, product] })),
        removeFromWishlist: (id) =>
          set((state) => ({ wishlist: state.wishlist.filter((product) => product.id !== id) })),
        updateItemWishlist: (newProduct) =>
          set((state) => ({
            wishlist: state.wishlist.map((product) => (product.id === newProduct.id ? newProduct : product)),
          })),
        addAddress: (address) =>
          set((state) => {
            if (address.isDefault) {
              state.addresses.forEach((addr) => {
                addr.isDefault = false
              })
            }
            return { addresses: [...state.addresses, address] }
          }),
        removeAddress: (id) => set((state) => ({ addresses: state.addresses.filter((address) => address.id !== id) })),
        updateAddress: (newAddress) =>
          set((state) => {
            if (newAddress.isDefault) {
              state.addresses.forEach((addr) => {
                addr.isDefault = false
              })
            }
            return {
              addresses: state.addresses.map((address) => (address.id === newAddress.id ? newAddress : address)),
            }
          }),
        addPayment: (payments) => set({ payments }),
        clearPayment: () => set({ payments: [] }),
      }),
      { name: 'global-store' }
    )
  )
}
