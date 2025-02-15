import React, { useCallback, useEffect, useMemo } from 'react'
import { cn, priceFormat } from '@/lib/utils'
import Image from 'next/image'
import SliderDualRange from './slider-dual-range'
import { usePathname, useSearchParams } from 'next/navigation'

type SelectNatureProps = {
  value: string
  selected: boolean
  onClick: () => void
}

const SelectNature = ({ onClick, selected, value }: SelectNatureProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center cursor-pointer px-4 py-2 rounded-[1.25rem] shadow-button-secondary heading-6 text-primary-6 uppercase transition-all duration-300',
        selected ? 'border-2 border-primary-9 bg-primary-1' : 'border border-primary-4'
      )}>
      {value}
    </div>
  )
}

type FilterNameProps = {
  name: string
  selected: boolean
  onClick: () => void
}

const FilterName = ({ name, onClick, selected }: FilterNameProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'cursor-pointer inline-flex items-center px-4 py-3 gap-3 text-xs font-semibold leading-5 uppercase text-primary-6 transition-all duration-300 rounded-full',
        selected ? 'bg-secondary-5' : ''
      )}>
      {name}
      <Image
        src='/icons/icon-down.svg'
        alt='arrow-down'
        width={12}
        height={12}
        className={cn('transition-all duration-300', selected ? 'transform rotate-180' : '')}
      />
    </div>
  )
}

export type FilterItem = {
  name: string
  values: { name: string; selected: boolean }[]
}

type FilterNatureProps = {
  filters: FilterItem[]
  prideFilter: {
    min: number
    max: number
  }
  className?: string
}

const FilterNature = ({ filters, className, prideFilter }: FilterNatureProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pride, setPride] = React.useState([prideFilter.min, prideFilter.max])
  const [natures, setNatures] = React.useState<FilterItem[]>(filters)
  const [filterOpen, setFilterOpen] = React.useState<string | null>(null)

  const selectedNatures = useMemo(() => {
    const selectedNatures = natures
      .map((filter) => filter.values.filter((nature) => nature.selected))
      .flat()
      .map((nature) => nature.name)

    if (pride[0] > prideFilter.min || pride[1] < prideFilter.max) {
      selectedNatures.push(`${priceFormat(pride[0])} - ${priceFormat(pride[1])}`)
    }

    return selectedNatures
  }, [natures, pride, prideFilter])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    const newUrl = `${pathname}?${createQueryString('filter', selectedNatures.join(','))}`

    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
  }, [createQueryString, pathname, selectedNatures])

  const handleClickFilter = (name: string) => {
    if (filterOpen === name) {
      setFilterOpen(null)
    } else {
      setFilterOpen(name)
    }
  }

  const handleClickNature = (name: string, value: boolean) => {
    // delete price item
    if (name.includes('₫')) {
      setPride([prideFilter.min, prideFilter.max])
    }

    const newFilters = natures.map((filter) => {
      if (filter.name === filterOpen) {
        return {
          ...filter,
          values: filter.values.map((nature) => {
            if (nature.name === name) {
              return {
                ...nature,
                selected: value,
              }
            }
            return nature
          }),
        }
      }
      return filter
    })
    setNatures(newFilters)
  }

  const handleClearAllNature = () => {
    setPride([prideFilter.min, prideFilter.max])
    setNatures(filters)
  }

  return (
    <>
      <div className={cn('py-2 border-t border-b border-neutral-4', className)}>
        <div className='flex items-center gap-2'>
          <h2 className='heading-6 text-black'>BỘ LỌC:</h2>
          {natures.map((filter, index) => (
            <FilterName
              key={index}
              name={filter.name}
              onClick={() => handleClickFilter(filter.name)}
              selected={filterOpen === filter.name}
            />
          ))}
          <FilterName name='Giá' onClick={() => handleClickFilter('price')} selected={filterOpen === 'price'} />
        </div>
        <div
          className={cn(
            'flex gap-4 w-full transition-all duration-300',
            filterOpen ? 'h-9 opacity-1 mt-4' : 'h-0 opacity-0 mt-0'
          )}>
          {natures
            .find((filter) => filter.name === filterOpen)
            ?.values.map((nature, index) => (
              <SelectNature
                key={index}
                value={nature.name}
                selected={nature.selected}
                onClick={() => handleClickNature(nature.name, !nature.selected)}
              />
            ))}
          {filterOpen === 'price' && (
            <div className='w-full'>
              <SliderDualRange
                value={pride}
                onValueChange={setPride}
                min={prideFilter.min}
                max={prideFilter.max}
                step={1000}
              />
              <div className='flex justify-between items-center heading-6 text-black mt-4'>
                <p>{priceFormat(0)}</p>
                <p>{priceFormat(prideFilter.max / 2)}</p>
                <p>{priceFormat(prideFilter.max)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedNatures.length > 0 && (
        <div className='flex gap-x-8 gap-y-5 p-2 mt-3 flex-wrap items-center bg-neutral-2'>
          {selectedNatures.map((nature, index) => (
            <div
              key={index}
              className='flex items-center gap-[0.625rem] px-2 py-1 rounded-full bg-neutral-1 border border-neutral-5 shadow-button-secondary'>
              <p className='text-sm leading-5 font-semibold uppercase text-primary-4'>{nature}</p>
              <Image
                className='cursor-pointer'
                src='/icons/icon-close.svg'
                alt='close'
                width={16}
                height={16}
                onClick={() => handleClickNature(nature, false)}
              />
            </div>
          ))}
          <div onClick={handleClearAllNature} className='flex items-center gap-[0.625rem] px-2 py-1 cursor-pointer'>
            <p className='text-sm leading-5 font-semibold uppercase text-primary-4'>Clear all</p>
            <Image src='/icons/icon-close.svg' alt='close' width={16} height={16} />
          </div>
        </div>
      )}
    </>
  )
}

export default FilterNature
