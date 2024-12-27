import { useEffect } from 'react'

/**
 * Custom hook that triggers a handler function when a click is detected outside of the specified element.
 *
 * @param ref - A React ref object pointing to the element to detect outside clicks for.
 * @param handler - A function to be called when a click outside the specified element is detected.
 * @param disable - An array of React ref objects pointing to elements that should not trigger the handler when clicked.
 *
 * @example
 * const ref = useRef(null);
 * const handleClickOutside = (event) => {
 *   console.log('Clicked outside:', event);
 * };
 * useClickOutside(ref, handleClickOutside, [disableRef1, disableRef2]);
 */
const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
  disable?: React.RefObject<HTMLElement | null>[]
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        disable?.some((item) => item.current?.contains(event.target as Node))
      ) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler, disable])
}

export default useClickOutside
