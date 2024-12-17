import { useEffect, useState } from 'react'

/**
 * Custom hook that tracks the vertical scroll position and scroll direction of the window.
 *
 * @returns An object containing:
 * - `scrollY`: The current vertical scroll position.
 * - `scrollDirection`: The direction of the scroll, either 'up' or 'down'.
 *
 * @example
 * const { scrollY, scrollDirection } = useScroll();
 * console.log(scrollY); // Current vertical scroll position
 * console.log(scrollDirection); // 'up' or 'down'
 */
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollDirection(scrollY > currentScroll ? 'up' : 'down')
      setScrollY(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  return { scrollY, scrollDirection }
}

export default useScroll
