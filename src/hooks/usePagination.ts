type UsePaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay: number
}

type UsePaginationReturn = {
  pages: number[]
  showLeftEllipsis: boolean
  showRightEllipsis: boolean
}

/**
 * Custom hook to calculate pagination range and ellipsis visibility.
 *
 * @param {Object} params - The parameters for pagination.
 * @param {number} params.currentPage - The current active page.
 * @param {number} params.totalPages - The total number of pages.
 * @param {number} params.paginationItemsToDisplay - The number of pagination items to display.
 * @returns {Object} - The pagination range and ellipsis visibility.
 * @returns {number[]} returns.pages - The array of page numbers to display.
 * @returns {boolean} returns.showLeftEllipsis - Whether to show the left ellipsis.
 * @returns {boolean} returns.showRightEllipsis - Whether to show the right ellipsis.
 */
export function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay,
}: UsePaginationProps): UsePaginationReturn {
  const showLeftEllipsis = currentPage - 1 > paginationItemsToDisplay / 2
  const showRightEllipsis = totalPages - currentPage + 1 > paginationItemsToDisplay / 2

  function calculatePaginationRange(): number[] {
    if (totalPages <= paginationItemsToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfDisplay = Math.floor(paginationItemsToDisplay / 2)
    const initialRange = {
      start: currentPage - halfDisplay,
      end: currentPage + halfDisplay,
    }

    const adjustedRange = {
      start: Math.max(1, initialRange.start),
      end: Math.min(totalPages, initialRange.end),
    }

    if (adjustedRange.start === 1) {
      adjustedRange.end = paginationItemsToDisplay
    }
    if (adjustedRange.end === totalPages) {
      adjustedRange.start = totalPages - paginationItemsToDisplay + 1
    }

    if (showLeftEllipsis) adjustedRange.start++
    if (showRightEllipsis) adjustedRange.end--

    return Array.from({ length: adjustedRange.end - adjustedRange.start + 1 }, (_, i) => adjustedRange.start + i)
  }

  const pages = calculatePaginationRange()

  return {
    pages,
    showLeftEllipsis,
    showRightEllipsis,
  }
}
