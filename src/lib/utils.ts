import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a given price as a currency string in Vietnamese Dong (VND).
 *
 * @param price - The price to format.
 * @returns The formatted price string in Vietnamese Dong.
 * @example priceFormat(1000000) => '1.000.000 ₫'
 */
export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

/**
 * Generates a unique identifier using the `crypto.randomUUID` method.
 *
 * @returns {string} A randomly generated UUID.
 * @example generateId() => 'f7b3f1b3-3b0b-4b0b-8b3b-3b0b7b3b0b7b'
 */
export const generateId = () => {
  return crypto.randomUUID()
}
