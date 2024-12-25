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
 * Generates a random class name by appending a random string to the given class name.
 * This is useful for generating unique class names for styling components.
 *
 * @param className - The class name to append a random string to.
 * @returns The class name with a random string appended to it.
 * @example randomClass('carousel') => 'carouse-labc1'
 */
export function randomClass(className: string) {
  return `${className}-${Math.random().toString(36).substring(2, 6)}`
}
