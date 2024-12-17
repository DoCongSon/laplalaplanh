import { useEffect } from 'react'

/**
 * Custom hook that triggers a handler function when a click is detected outside of the specified element.
 *
 * @param ref - A React ref object pointing to the element to detect outside clicks for.
 * @param handler - A function to be called when a click outside the specified element is detected.
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => {
 *   console.log('Clicked outside');
 * });
 */
const useClickOutside = (ref: React.RefObject<HTMLElement | null>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
