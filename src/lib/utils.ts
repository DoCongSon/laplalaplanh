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
