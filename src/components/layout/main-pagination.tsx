import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import { usePagination } from '@/hooks/usePagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type PaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay?: number
  className?: string
}

const MainPagination = ({ currentPage, totalPages, paginationItemsToDisplay = 5, className }: PaginationProps) => {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  })

  return (
    <div className={cn('flex items-center justify-center gap-2 px-2 py-4', className)}>
      {/* Pagination */}
      <div>
        <Pagination>
          <PaginationContent>
            {/* Previous page button */}
            <PaginationItem>
              <PaginationLink
                className='aria-disabled:pointer-events-none aria-disabled:opacity-50 border-neutral-5'
                href={currentPage === 1 ? '#/page/1' : `#/page/${currentPage - 1}`}
                aria-label='Go to previous page'
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? 'link' : undefined}>
                <ChevronLeft size={16} strokeWidth={2} aria-hidden='true' />
              </PaginationLink>
            </PaginationItem>

            {/* Left ellipsis (...) */}
            {showLeftEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Page number links */}
            {pages.map((page: number) => (
              <PaginationItem key={page}>
                <PaginationLink href={`#/page/${page}`} isActive={page === currentPage}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Right ellipsis (...) */}
            {showRightEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next page button */}
            <PaginationItem>
              <PaginationLink
                className='aria-disabled:pointer-events-none aria-disabled:opacity-50 border-neutral-5'
                href={currentPage === totalPages ? '#/page/1' : `#/page/${currentPage + 1}`}
                aria-label='Go to next page'
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? 'link' : undefined}>
                <ChevronRight size={16} strokeWidth={2} aria-hidden='true' />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default MainPagination
